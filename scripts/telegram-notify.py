#!/usr/bin/env python3
"""Posts the release announcement to the game's Telegram channel.

Usage: TELEGRAM_BOT_TOKEN=… TELEGRAM_CHAT_ID=@channel_or_-100… scripts/telegram-notify.py VERSION NOTES_FILE [WEB_URL] [APK_URL]
The token and the chat id come ONLY from the environment (GitHub Actions secrets) and are never printed.
A failure here must not fail a release, so the workflow step is marked continue-on-error.
Only the Python standard library is needed.
"""
import html, json, os, sys, urllib.request

def build(version: str, notes: str, web_url: str = '', apk_url: str = '') -> str:
    lines = [l.strip().lstrip('-•* ').strip() for l in notes.splitlines() if l.strip()]
    items = '\n'.join(f'• {html.escape(l)}' for l in lines[:12])
    text = f'🧩 <b>Puzzlegrad {html.escape(version)}</b> — вышло обновление!\n\n{items}\n\n'
    text += 'Зайдите в игру, чтобы получить новую версию'
    text += ' (в приложении появится окно обновления).' if apk_url else '.'
    links = []
    if web_url: links.append(f'<a href="{html.escape(web_url, quote=True)}">Играть в браузере</a>')
    if apk_url: links.append(f'<a href="{html.escape(apk_url, quote=True)}">Скачать APK</a>')
    if links: text += '\n\n' + ' · '.join(links)
    return text[:4000]

def main() -> int:
    token, chat = os.environ.get('TELEGRAM_BOT_TOKEN', ''), os.environ.get('TELEGRAM_CHAT_ID', '')
    if not token or not chat:
        print('Telegram is not configured (TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID); skipping'); return 0
    version, notes_file = sys.argv[1], sys.argv[2]
    web = sys.argv[3] if len(sys.argv) > 3 else ''
    apk = sys.argv[4] if len(sys.argv) > 4 else ''
    text = build(version, open(notes_file, encoding='utf-8').read(), web, apk)
    body = json.dumps({'chat_id': chat, 'text': text, 'parse_mode': 'HTML', 'disable_web_page_preview': True}).encode()
    req = urllib.request.Request(f'https://api.telegram.org/bot{token}/sendMessage', body, {'Content-Type': 'application/json'})
    try:
        with urllib.request.urlopen(req, timeout=20) as r:
            ok = json.load(r).get('ok')
    except Exception as e:  # never print the URL: it contains the token
        print('Telegram send failed:', type(e).__name__); return 1
    print('Telegram: sent' if ok else 'Telegram: refused'); return 0 if ok else 1

if __name__ == '__main__':
    sys.exit(main())
