// The game script must parse: a name declared twice in it (easy to do while moving code into src/) stops the
// whole game at start-up. Parsing is cheap and needs no browser, so it runs before the slow golden replays.
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

test('web/game.html: the game script parses', () => {
  const html = fs.readFileSync('web/game.html', 'utf8');
  const code = html.slice(html.indexOf('<script>') + 8, html.lastIndexOf('</script>'));
  assert.doesNotThrow(() => new Function(code));
});
