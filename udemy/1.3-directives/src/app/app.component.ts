import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isVisible = false;
  clicksLog: number[] = [];
  clicksCount = 0;

  onClick() {
    this.isVisible = !this.isVisible;
    this.clicksCount++;
    this.clicksLog.push(+ new Date());
    console.log(this.clicksLog);
    console.log(this.clicksLog.length);
  }

  getColor() {
    return this.clicksLog.length >= 5 ? 'blue' : 'transparent';
  }
}
