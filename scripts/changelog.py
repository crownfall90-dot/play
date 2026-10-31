#!/usr/bin/env python3
"""Rebuilds docs/CHANGELOG.md from the release tags (v<code>) and the history between them.

For every release: the notes players saw (release-notes.md at the tag) and the merged changes
since the previous tag (commit subjects). Run after each release: python3 scripts/changelog.py
"""
import os, subprocess

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')


def sh(cmd):
    return subprocess.run(cmd, shell=True, capture_output=True, text=True, cwd=ROOT, encoding='utf-8', errors='replace').stdout


# Releases whose tag history is not the code that was built (see the rollback in docs/ARCHITECTURE.md).
MANUAL = {
    'v184': ('Возврат к версии 1.0.182: предыдущая версия игры, если в новой что-то работает не так (пробный откат). '
             'Тег этого выпуска ошибочно указывал на main; в дальнейших выпусках тег ставится на собранный коммит.'),
}


def main():
    tags = sorted([t for t in sh('git tag -l "v*"').split() if t[1:].isdigit()], key=lambda t: int(t[1:]))
    out = ["# Журнал версий", "",
           "Каждая версия: что увидят игроки (текст из `release-notes.md` в момент выпуска) и что изменилось в коде "
           "(заголовки слияний в main). Создаётся `scripts/changelog.py` из тегов релизов; при каждом выпуске "
           "обновляется автоматически. Служебные детали панели владельца и сборки есть только здесь.", "",
           "Версии 181–183 вышли с общей формулировкой «Небольшие исправления и улучшения»: заметки к ним не были "
           "заполнены вовремя. 183 вышла автоматически при слиянии PR 83, до того как выпуск стал выполняться только "
           "по команде.", ""]
    for i, t in enumerate(tags):
        date = sh(f"git log -1 --format=%ad --date=short {t}").strip()
        notes = sh(f"git show {t}:release-notes.md").strip()
        rng = f"{tags[i - 1]}..{t}" if i else t
        subjects = [s for s in sh(f"git log --format=%s {rng}").splitlines() if s.strip()]
        out += [f"## 1.0.{t[1:]} — {date}", "", "**Игрокам:**"]
        if t in MANUAL:
            out.append(f"- {MANUAL[t]}")
        else:
            out += [("- " + l.lstrip("-•– ").strip()) for l in notes.splitlines() if l.strip()] or ["- (без описания)"]
        out += ["", "**В коде:**"]
        out += [f"- {s}" for s in subjects] or ["- (нет новых слияний)"]
        out.append("")
    with open(os.path.join(ROOT, 'docs', 'CHANGELOG.md'), 'w', encoding='utf-8') as f:
        f.write("\n".join(out) + "\n")


if __name__ == '__main__':
    main()
