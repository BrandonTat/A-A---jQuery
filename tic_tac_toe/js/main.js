const View = require("./ttt-view.js");
const Game = require("../solution/game.js");

$( () => {
  const game = new Game();

  const $figure = $(".ttt");
  console.log($figure);
  const view = new View(game, $figure);
});
