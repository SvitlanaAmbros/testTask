import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthorizationService {
	id:string;

	constructor(private afAuth: AngularFireAuth,
	 				private router:Router) { 
	}

	login(email, password) {
		this.afAuth.auth
			.signInWithEmailAndPassword(email, password)
			.then(authResult =>this.authOnSuccess(authResult))
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

  	register(email, password) { 
  		return this.afAuth.auth
  			.createUserWithEmailAndPassword(email, password)
  			.then(authResult => this.authOnSuccess(authResult))
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
  	
  	getUserID() {
		return this.id;
  	}

  	authOnSuccess(authResult) {
  		this.id = authResult.user.uid;
  		this.router.navigateByUrl('details');
  	}

  	logout(){
  		this.afAuth.auth.signOut();
  	}
}

