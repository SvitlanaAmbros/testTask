import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
          // console.log(data);
          return data;
      }))
    );
		return this.items;
	}

  // addUser(user: User) {
    // user.id = this.authorization.getUserID();
    // console.log(user.id);
    // this.itemsCollection.add(user);
  // }

  updateUserInfo(user:UserDB){
    // this.itemsCollection = this.afs.collection('detail');
    // console.log(user.id);
    // this.itemsCollection.add(user);
        console.log(user.id);
    this.itemDoc = this.afs.doc('detail/'+user.id);

    this.itemDoc.update(user);
  }
}
