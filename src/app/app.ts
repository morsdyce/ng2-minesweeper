/// <reference path="../typings/_custom.d.ts" />

/*
 * Angular 2 decorators and services
 */
import {Directive, Component, View, ElementRef} from 'angular2/angular2';
import {Http, Headers} from 'angular2/http';
import {Board} from './components/board/board';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app' // <app></app>
})
@View({
  directives: [Board],
  template: '<board></board>'
})
export class App {
  title: string;
  data: Array<any> = []; // default data
  constructor(public http: Http) {
    this.title = 'Angular 2';

    // Our API
    // npm run express-install
    // npm run express

    const BASE_URL = 'http://localhost:3001';
    const TODO_API_URL = '/api/todos';
    const JSON_HEADERS = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    this.http
      .get(BASE_URL + TODO_API_URL, {
        headers: JSON_HEADERS
      })
      .toRx()
      .map(res => res.json())
      .subscribe(
        // onNext callback
        data => this.serverData(data),
        // onError callback
        err  => this.errorMessage(err)
      );//end http
  }

  serverData(data) {
    console.log('data', data);
    this.data = data;
  }//serverData

  errorMessage(err) {
    if (err && (/Unexpected token/).test(err.message) || err.status === 0) {
      console.info(`${'\n'
        } // You must run these commands for the Http API to work in another process ${'\n'
        } npm run express-install ${'\n'
        } npm run express
      `);
    }//end err.message
  }//errorMessage

}
