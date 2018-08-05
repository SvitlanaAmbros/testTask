import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/User';
import { UserDB } from '../models/UserDB';
import { AuthorizationService } from './authorization.service';

@Injectable({
  providedIn: 'root'
})

export class ItemService {
	itemsCollection: AngularFirestoreCollection<UserDB>;
  itemDoc: AngularFirestoreDocument<UserDB>;
  items:Observable<UserDB[]>;
  currentUser:UserDB;

	constructor(private afs: AngularFirestore, 
				private authorization: AuthorizationService) { 
  	
	}

	getCurrentUser(items) {
  	return items.find(item => item.id == this.authorization.getUserID());
	}

	getItems() {
    this.itemsCollection = this.afs.collection('detail');

    this.items = this.itemsCollection
    .snapshotChanges()
    .pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as UserDB;
          data.id = a.payload.doc.id;
          return data;
      }))
    );
		return this.items;
	}

  updateUserInfo(user:UserDB){
    this.itemDoc = this.afs.doc('detail/'+user.id);
    this.itemDoc.update(user);
  }

  addUserInfo(user:User) {
    let userDB:UserDB;

    userDB = {
      id:this.authorization.getUserID(),
      firstName:user.firstName,
      lastName:user.lastName,
      age:user.age,
      country:user.country,
    }

    this.itemsCollection = this.afs.collection('detail');
    this.itemsCollection.doc(this.authorization.getUserID()).set(userDB);
  }
}
