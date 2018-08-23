import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  mail = '';
  subscription = 'advanced';
  password = '';
  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.mail = this.signupForm.value.mail;
    this.subscription = this.signupForm.value.subscription;
    this.password = this.signupForm.value.password;

  }

}
