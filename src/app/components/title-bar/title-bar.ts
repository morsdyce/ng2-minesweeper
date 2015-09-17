import {Directive, Component, View, ElementRef} from 'angular2/angular2';
const template = require('./title-bar.html');

@Component({
  selector: 'title-bar'
})
@View({
  directives: [],
  template: template
})
export class TitleBar {

  image:string;
  icon:string;

  constructor() {
    this.image = 'images/title-buttons.png';
    this.icon = 'images/icon.png';
  }
}
