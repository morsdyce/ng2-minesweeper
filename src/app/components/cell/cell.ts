import {Directive, Component, View, ElementRef, NgIf} from 'angular2/angular2';
import Spot from '../../common/spot/spot';
import _ from 'lodash';
const template = require('./cell.html');

@Component({
  selector: 'cell',
  properties: ['spot']
})
@View({
  directives: [NgIf],
  template: template
})
export class Cell {

  images:any;
  spot:any;

  constructor() {
    this._loadImages();
  }

  log() {
    console.log(this.spot);
  }

  _loadImages() {
    this.images = {
      covered: 'images/covered.png',
      flagged: 'images/flag-mine.png'
    };

    for (let spotType of Spot.TYPES) {
      let image = Spot.TYPES[spotType.type].image;
      this.images[spotType.type] = `images/${image}`;
    }
  }
}
