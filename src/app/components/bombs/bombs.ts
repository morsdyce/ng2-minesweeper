import {Directive, Component, View, ElementRef, NgIf} from 'angular2/angular2';
const template = require('./bombs.html');

@Component({
  selector: 'bombs',
  properties: ['amount']
})
@View({
  template: template
})
export class Bombs {

  amount:any;
}
