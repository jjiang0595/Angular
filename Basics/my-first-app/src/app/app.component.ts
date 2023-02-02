import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  numArray = [];
  showContent = false;

  constructor() {
  }

  ngOnInit() {
  }

  toggleContent() {
    this.showContent = !this.showContent;
    this.numArray.push(this.numArray.length + 1);
  }
}
