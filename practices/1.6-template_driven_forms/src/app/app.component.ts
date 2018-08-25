import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  email = '';
  subscription = 'advanced';
  password = '';
  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.email = this.signupForm.value.email;
    this.subscription = this.signupForm.value.subscription;
    this.password = this.signupForm.value.password;

  }

}
