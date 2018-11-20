import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Post 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      loveIts: 3,
      created_at: new Date()
    },
    {
      title: 'Post 2',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris duis aute irure dolor in reprehenderit.',
      loveIts: 55,
      created_at: new Date()
    },
    {
      title: 'Post 3',
      content: 'Laboris nisi ut aliquip ex ea commodo consequat duis velit esse cillum dolore eu fugiat nulla pariatur.',
      loveIts: 0,
      created_at: new Date()
    }
  ];
}
