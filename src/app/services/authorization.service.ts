import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

	constructor(private afAuth: AngularFireAuth) { }

	login(user: User) {
		this.afAuth.auth
			.signInWithEmailAndPassword(user.email, user.password)
        	.catch(function(error) {
			var errorCode = error.code;
			var errorMessage = error.message;
	        if (errorCode === 'auth/wrong-password') {
	           	alert('Wrong password.');
	        } else {
	        	alert(errorMessage);
	        }
	        console.log(error);
    		});
  	}

  	register(user: User) { 
  		firebase.auth()
  			.createUserWithEmailAndPassword(email, password)
	    	.catch(function(error) {
	  		var errorCode = error.code;
	  		var errorMessage = error.message;
	  		if (errorCode == 'auth/weak-password') {
	    		alert('The password is too weak.');
	  		} else {
	   			 alert(errorMessage);
	  		}
	  		console.log(error);
		});
  	}
}

