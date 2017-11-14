import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = 'anony';
  
    constructor(private user: UserService) { }
  
    ngOnInit() {
      this.name = this.user.username;
      console.log('Is user logged in? ', this.user.getUserLoggedIn())
  }

}
