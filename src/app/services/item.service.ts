import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { User } from '../models/User';
import { UserDB } from '../models/UserDB';
import { AuthorizationService } from './authorization.service';

@Injectable({
  providedIn: 'root'
})

export class ItemService {
	itemsCollection: AngularFirestoreCollection<UserDB>;

	constructor(private afs: AngularFirestore, 
				private authorization: AuthorizationService) { 
  	this.itemsCollection = this.afs.collection('detail');
	}

	getCurrentUser() {
    return this.itemsCollection.doc(this.authorization.getUserID()).ref.get();
	}

  updateUserInfo(user:UserDB){
    this.afs.doc('detail/' + this.authorization.getUserID()).update(user);
  }

  addUserInfo(user:User) {
    let userDB:UserDB;

    userDB = {
      firstName:user.firstName,
      lastName:user.lastName,
      age:user.age,
      country:user.country,
    }

    this.itemsCollection.doc(this.authorization.getUserID()).set(userDB);
  }
}
