class HanoiView {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers();
    this.render();
    this.bindEvents();
  }

  setupTowers() {
    for (let rowIdx = 0; rowIdx < 3; rowIdx ++) {
      let $ul = $("<ul>");
      for (let colIdx = 0; colIdx < 3; colIdx++) {
        let $li = $("<li>");
        $li.data("pos",[rowIdx,colIdx]);
        $ul.append($li);
      }

      this.$el.append($ul);
    }
  }

  render() {
    let towers = this.game.towers;
    for (let i = 0; i < 3; i++) {
      for( let j = 0; j < 3; j++) {
        if (towers[i][j]) {
          let $li = $("li").find(`[pos='${[i,j]}']`);
          $li.addClass(`disc${towers[i][j]}`);
        }
      }
    }
  }

  bindEvents() {
    $('li').on("click", e => {
      const $sq = $(e.currentTarget);
      console.log($sq.data("pos"));
      console.log($sq.class);
    });
  }
}
module.exports = HanoiView;
