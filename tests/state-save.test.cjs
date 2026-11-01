const test = require('node:test');
const assert = require('node:assert/strict');
const save = require('../src/state/save.js');

function createMockStorage() {
  const store = new Map();
  return {
    getItem: (k) => store.has(k) ? store.get(k) : null,
    setItem: (k, v) => store.set(k, String(v)),
    removeItem: (k) => store.delete(k),
    clear: () => store.clear()
  };
}

test('state/save: gameKey correctly formats online and local IDs', () => {
  assert.equal(save.gameKey(null), '');
  assert.equal(save.gameKey({}), '');
  assert.equal(save.gameKey({online: 'ABC12'}), 'o:ABC12');
  assert.equal(save.gameKey({localId: 'loc99'}), 'l:loc99');
});

test('state/save: markGameFinished and isGameFinished track completed matches', () => {
  const storage = createMockStorage();
  assert.equal(save.isGameFinished(storage, 'o:ABC12'), false);

  save.markGameFinished(storage, 'o:ABC12');
  assert.equal(save.isGameFinished(storage, 'o:ABC12'), true);
  assert.equal(save.isGameFinished(storage, 'o:OTHER'), false);

  const list = save.finishedGames(storage);
  assert.equal(list.length, 1);
  assert.equal(list[0].k, 'o:ABC12');
});

test('state/save: saveActiveGame, loadActiveGame, and clearActiveGame handle local state', () => {
  const storage = createMockStorage();
  assert.equal(save.loadActiveGame(storage), null);

  const gameLog = {
    cfg: {seats: [{name: 'P1'}, {name: 'P2'}], deck: ['r1', 'r2'], localId: 'test1'},
    moves: [{x: 0, y: 0}]
  };

  save.saveActiveGame(storage, gameLog);
  const loaded = save.loadActiveGame(storage);
  assert.deepEqual(loaded.cfg, gameLog.cfg);
  assert.equal(loaded.moves.length, 1);

  // Mark finished: loading should clean up and return null
  save.markGameFinished(storage, 'l:test1');
  assert.equal(save.loadActiveGame(storage), null);
  assert.equal(storage.getItem(save.SAVED_GAME_KEY), null);
});

test('state/save: getLastOnline validates timestamp freshness', () => {
  const storage = createMockStorage();
  assert.equal(save.getLastOnline(storage), null);

  storage.setItem(save.LAST_ONLINE_KEY, JSON.stringify({code: 'XYZ12', at: Date.now() - 1000}));
  const fresh = save.getLastOnline(storage, 5000);
  assert.ok(fresh);
  assert.equal(fresh.code, 'XYZ12');

  const stale = save.getLastOnline(storage, 500);
  assert.equal(stale, null);
});

test('state/save: saveHistoryEntry caps at 50 matches', () => {
  const storage = createMockStorage();
  for (let i = 0; i < 55; i++) {
    save.saveHistoryEntry(storage, {id: 'g:' + i, at: i, score: 10 + i});
  }
  const history = save.jsonRead(storage, save.GAME_HISTORY_KEY, []);
  assert.equal(history.length, 50);
  assert.equal(history[0].id, 'g:54');
});
