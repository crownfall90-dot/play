#!/usr/bin/env python3
"""
Puzzlegrad database backup script.
Dumps all critical Firebase Realtime Database trees (profiles, leaders, fcodes, presence)
to a timestamped JSON file.
Uses service account credentials if available (via scripts/fbadmin.py)
or a Firebase database secret.
"""
import json
import os
import sys
import time
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

# Add scripts directory to path to import fbadmin if needed
sys.path.insert(0, str(Path(__file__).resolve().parent))

DB_URL = os.environ.get("FIREBASE_DB_URL", "https://puzzlegrad-default-rtdb.europe-west1.firebasedatabase.app")
OUT_DIR = Path(os.environ.get("BACKUP_DIR", "backups"))


def get_token():
    sa_json = os.environ.get("FIREBASE_SERVICE_ACCOUNT")
    if sa_json:
        try:
            import fbadmin
            sa = json.loads(sa_json)
            return fbadmin.token(sa)
        except Exception as e:
            print(f"[warning] failed to get token via fbadmin: {e}", file=sys.stderr)
    return os.environ.get("FIREBASE_SECRET", "")


def fetch_node(node, token):
    url = f"{DB_URL.rstrip('/')}/{node}.json"
    if token:
        url += f"?auth={token}"
    req = urllib.request.Request(url, headers={"User-Agent": "Puzzlegrad-Backup/1.0"})
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            return json.loads(resp.read().decode("utf-8"))
    except Exception as e:
        print(f"[error] failed to fetch node '{node}': {e}", file=sys.stderr)
        return None


def run_backup():
    token = get_token()
    now = datetime.now(timezone.utc)
    ts = now.strftime("%Y%m%d_%H%M%S")
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    out_file = OUT_DIR / f"puzzlegrad_backup_{ts}.json"

    print(f"[{ts}] Starting database backup from {DB_URL}...")
    nodes = ["profiles", "leaders", "fcodes", "presence", "playerNo", "guestN"]
    dump = {
        "_backup_meta": {
            "created_at": now.isoformat(),
            "timestamp": int(now.timestamp()),
            "nodes": nodes,
        }
    }

    for node in nodes:
        print(f"  Fetching /{node}...")
        data = fetch_node(node, token)
        if data is not None:
            dump[node] = data
            count = len(data) if isinstance(data, (dict, list)) else 1
            print(f"  ✓ /{node}: {count} records")
        else:
            print(f"  ✗ /{node}: skipped/failed")

    out_file.write_text(json.dumps(dump, ensure_ascii=False, indent=2), encoding="utf-8")
    size_kb = out_file.stat().st_size / 1024
    print(f"✓ Backup successfully saved to {out_file} ({size_kb:.1f} KB)")
    return out_file


if __name__ == "__main__":
    run_backup()
