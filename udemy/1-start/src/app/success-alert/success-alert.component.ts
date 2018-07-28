import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `
  <h3>This is success component!</h3>
  `,
  styles: [`
  h3 {
    padding: 20px;
    background-color: greenyellow;
    border: 5px solid green;
    color: darkgreen;
  }`]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
