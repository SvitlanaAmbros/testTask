import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AuthorizationService } from '../../services/authorization.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  user:User = {
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword:'',
    age: 0,
    country:''
  };

  constructor(public authorization: AuthorizationService) { 
  }

  ngOnInit() {
  }

  login(){
    if(this.user.email != "" && this.user.password != "") {
      this.authorization.login(this.user);
    }
  }

  logout(){
    this.authorization.logout();
  }

    
}
