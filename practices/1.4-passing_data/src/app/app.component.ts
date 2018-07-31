import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onCounterFired(num: number) {
    num % 2 === 0 ? this.evenNumbers.push(num) : this.oddNumbers.push(num);
  }
}
