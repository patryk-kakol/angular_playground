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
      home_number: 66
    };
    this.hobbies = ['Write code', 'Read books', 'Skate'];
    this.hello = [1, 2, null, true, 'YO!'];
  }

  onClick() {
    console.log('Grow up!');
    this.age += 1;
  }

  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    console.log(hobby);
    // this.hobbies.forEach( (val, index) => {
    //   val === hobby ? this.hobbies.splice(index, 1) : null;
    // });
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] === hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

}

interface Address {
  street: string;
  city: string;
  home_number: number;
}
