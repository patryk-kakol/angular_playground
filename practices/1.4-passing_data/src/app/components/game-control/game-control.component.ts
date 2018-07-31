import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  currentNum = 0;
  counter;

  constructor() { }

  ngOnInit() {}

  onStart() {
    this.counter = setInterval( () => this.currentNum++, 1000);
  }

  onStop() {
    clearInterval(this.counter);
  }

}
