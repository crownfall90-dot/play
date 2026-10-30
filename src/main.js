// Everything game.html takes from the modules. Grows step by step as code moves out of game.html.
import {rng, hash} from './engine/rng.js';
import {TYPES, normEdge, rareName, deckList} from './engine/tiles.js';
import * as board from './engine/board.js';
import * as scoring from './engine/scoring.js';
import * as bots from './engine/bots.js';

export const engine = {rng, hash, TYPES, normEdge, rareName, deckList, board, scoring, bots};
