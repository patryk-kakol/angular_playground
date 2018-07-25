import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  hello: any[];

  constructor() {
    console.log('constructor ran...');
  }

  ngOnInit() {
    console.log('ngOnInit ran...');
    this.name = 'John Doe';
    this.age = 15;
    this.email = 'johhnyyd@yo.com';
    this.address = {
      street: 'Cute',
      city: 'Gdansk',
      street_number: 66
    };
    this.hobbies = ['Write code', 'Read books', 'Skate'];
    this.hello = [1, 2, null, true, 'YO!'];
  }

  onClick() {
    console.log('Grow up!');
    this.age += 1;
  }

}




interface Address {
  street: string;
  city: string;
  street_number: number;
}
