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

  // validate(regex, value, errorMsg, errorMsgArray) {
  //   if (regex.test(value)) {
  //     errorMsgArray.push(errorMsg);
  //   }
  // }

  register() { 
    let nameRegex = /^.+$/;
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let ageRegex= /^[0-9]+$/;
    let passwordRegex = /^.{6,}$/;
    let countryRegex = /^[a-zA-Z]+$/;
    
    // let errorMsgArray = [];
    // this.validate(nameRegex, this.user.firstName, "FirstName is incorrect!", errorMsgArray);
    // validate(nameRegex, this.user.lastName, "LastName is incorrect!", errorMsgArray);
    // validate x 20
    // alert(errorMsgArray[0]);
    

    if (nameRegex.test(this.user.firstName) &&
        nameRegex.test(this.user.lastName) && 
        emailRegex.test(this.user.email) &&
        passwordRegex.test(this.user.password) &&
        passwordRegex.test(this.user.confirmPassword) &&
        ageRegex.test(String(this.user.age)) && 
        countryRegex.test(this.user.country) &&
        (this.user.password == this.user.confirmPassword)){

      // this.itemService.addUser(this.user);
      // alert(this.user);
    
      this.authorization.register(this.user.email, this.user.password);

    }else {
      alert('Something is wrong!')
    } 


  } 
}
