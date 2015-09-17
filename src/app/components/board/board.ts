import {Directive, Component, View, ElementRef, NgFor} from 'angular2/angular2';
import {TitleBar} from '../title-bar/title-bar';
import Minefield from '../../common/minesweeper';
import MineSweeper from "../../common/minesweeper";
import {Cell} from '../cell/cell';
const template = require('./board.html');

@Component({
  selector: 'board' // <app></app>
})
@View({
  directives: [TitleBar, NgFor, Cell],
  template: template
})
export class Board {

  game:any;
  constructor() {
    this.game = new MineSweeper();
    this.text = 'Hello';
  }

  revealSpot(spot) {
    spot.revealSpot();

    if (this.game.hasWon() || this.game.hasLost()) {
      //this.$scope.$broadcast('game-over');
    }

    if (this.game.hasWon()) {
      alert('You Win!');
    } else if (this.game.hasLost()) {
      alert('You lose!');
    }
  }

  flagSpot(spot) {
    spot.flagSpot();
  }

  remainingBombs() {
    return this.game.remainingBombs();
  }

  newGame() {
    this.game = new MineSweeper();
    //this.$scope.$broadcast('reset-timer');
  }
}
