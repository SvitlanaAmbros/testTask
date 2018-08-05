import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { User } from '../../models/User';
import { AuthorizationService } from '../../services/authorization.service';
import { ItemService } from '../../services/item.service';  

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  user:User = {
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword:'',
    age: 0,
    country:''
  };

  constructor(private router:Router, 
            private authorization: AuthorizationService,
            private itemService: ItemService) { 
  }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('');
  }

  register() { 
    let nameRegex = /^.+$/;
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let ageRegex= /^[0-9]+$/;
    let passwordRegex = /^.{6,}$/;
    let countryRegex = /^[a-zA-Z]+$/;
    
    if (nameRegex.test(this.user.firstName) &&
        nameRegex.test(this.user.lastName) && 
        emailRegex.test(this.user.email) &&
        passwordRegex.test(this.user.password) &&
        passwordRegex.test(this.user.confirmPassword) &&
        ageRegex.test(String(this.user.age)) && 
        countryRegex.test(this.user.country) &&
        (this.user.password == this.user.confirmPassword)){

      this.authorization
        .register(this.user.email, this.user.password)
        .then((res) => this.itemService.addUserInfo(this.user));
    }else {
      alert('Inputted details are wrong!')
    } 
  } 
}
