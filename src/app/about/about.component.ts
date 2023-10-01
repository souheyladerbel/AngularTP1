import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  name = 'souheyla';
  imageURL =
    'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png';
  alternative = 'logo';
  sname = '';
  theme = 'Default';
  todos = [
    { title: 'learn angular', done: false },
    { title: 'Create project angular', done: false },
  ];
  change() {
    this.todos.map((value) => {
      value.done = true;
    });
  }
}
