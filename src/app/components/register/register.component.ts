import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user:User = {
  	email:'',
  	password:''
  };

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
	this.location.back();
  }

  register() { 
  	register(user);
  }
}
