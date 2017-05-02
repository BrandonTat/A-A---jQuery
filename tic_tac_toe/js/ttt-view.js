class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $('li').on("click", e => {
      const $sq = $(e.currentTarget);
      if (this.game.isOver()) {
        $('li').off();
      } else {
        this.makeMove($sq);
      }
    });
  }

  makeMove($square) {
    let curPlayer = this.game.currentPlayer;
    let move = this.game.playMove($square.data("pos"));
    if (this.game.isOver()){
      let winner = this.game.winner();
      let $figcaption = $("<figcaption>");
      $figcaption.html(`${winner.toUpperCase()} Wins!!`);
      this.$el.append($figcaption);
    }
    if (move === undefined) {
      console.log(curPlayer);
      $square.addClass(`${curPlayer}`);
      $square.text(curPlayer);
      curPlayer = this.game.currentPlayer;
    }else {
      alert("Invalid move!");
    }
  }

  setupBoard() {
    const $ul = $("<ul>");
    $ul.addClass("group");

    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
      for (let colIdx = 0; colIdx < 3; colIdx++) {
        let $li = $("<li>");
        $li.data("pos", [rowIdx, colIdx]);

        $ul.append($li);
      }
    }
    console.log(this.$el);
    this.$el.append($ul);
 }
}

module.exports = View;
