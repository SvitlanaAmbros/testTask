import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthorizationService {

	constructor(private afAuth: AngularFireAuth,
	 				private router:Router) { 
	}

	login(user: User) {
		this.afAuth.auth
			.signInWithEmailAndPassword(user.email, user.password)
			.then((res) =>this.change())
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
  		this.afAuth.auth
  			.createUserWithEmailAndPassword(user.email, user.password)
  			.then((res) => this.change())
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

  	goToDetails(id:string) {
  		// console.log(id)
		this.router.navigate(['details',id]);
  	}

  	change() {
  		this.afAuth.auth.onAuthStateChanged(user => {
  			this.goToDetails(user.uid);
  			// console.log(user.uid)
  		});
  	}

  	logout(){
  		this.afAuth.auth.signOut();
  	}
}

