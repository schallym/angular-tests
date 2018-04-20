import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: 'My first post',
      content: 'Hello first post'
    },
    {
      title: 'My second post',
      content: 'Hello second post'
    },
    {
      title: 'Another post',
      content: 'Hello another post'
    }
  ];

  constructor() {
  }
}
