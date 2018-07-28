import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `
  <h3>This is success component!</h3>
  `,
  styles: [`
    h3 {
      color: green
    }`]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
