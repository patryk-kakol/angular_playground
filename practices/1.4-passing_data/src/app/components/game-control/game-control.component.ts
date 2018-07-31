import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// import { EventEmitter } from '../../../../node_modules/protractor';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() counterFired = new EventEmitter<number>();
  counter;
  currentNumber = 0;

  constructor() { }

  ngOnInit() {}

  onStart() {
    this.counter = setInterval( () => {
      this.counterFired.emit(this.currentNumber);
      this.currentNumber++;
    }, 1000);
  }

  onStop() {
    clearInterval(this.counter);
  }

}
