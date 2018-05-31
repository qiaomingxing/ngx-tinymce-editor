import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  content = 'app';

  constructor() {

  }

  log(e) {
    console.log(e)
  }
}
