const Game = require('./game.js');
const View = require('./view.js');

$(() => {
  const rootEl = $('#calculator');
  const game = new Game();
  new View(game, rootEl);
});
