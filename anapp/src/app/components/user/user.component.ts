import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

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
  incr: Incrementing;
  posts: Post[];
  isEdit: boolean;

  constructor(private dataService: DataService) {
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

    this.incr = {
      inc1: 1,
      inc2: 2,
      inc3: 3
    };

    this.isEdit = true;

    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
      console.log(posts);
    });
  }

  onClick() {
    console.log('Grow up!');
    this.age++;
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

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

  increment() {
    this.incr.inc1++;
    this.incr.inc2 += 1;
    this.incr.inc3 = Number(this.incr.inc3 + 1);
  }

}

interface Address {
  street: string;
  city: string;
  home_number: number;
}

interface Incrementing {
  inc1: number;
  inc2: number;
  inc3: number;
}

interface Post {
  id: number;
  title: string;
  body: string;
  user_id: number;
}
