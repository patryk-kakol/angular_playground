import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isVisible = false;
  clicksLog = [];

  onClick() {
    this.isVisible = !this.isVisible;
    this.clicksLog.push(new Date());
  }
}
