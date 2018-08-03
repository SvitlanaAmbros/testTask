import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:User = {
  	login:'',
  	password:''
  };

  constructor() { }

  ngOnInit() {

  }

  onSubmit() {
  	console.log(this.user.login + this.user.password);
  }
}
