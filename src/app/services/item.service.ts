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
  	items:Observable<UserDB[]>;
  	currentUser:UserDB;

	constructor(private afs: AngularFirestore, 
				private authorization: AuthorizationService) { 
  	
	}

  	// getItems() {
  	// 	return this.items;
  	// }

  	// subscribeOnItems() {
  	// 	this.items.subscribe(items => {
   //    		this.items = items;
   //    		// this.currentUser = this.getCurrentUser(this.id);
   //  	});
  	// }

  	getCurrentUser(items) {
  		// console.log(this.authorization.getUserID());
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

  	// getCurrentUser() {
  	// 	while(this.flag) {
  	// 	console.log("waiting")
  	// }
  	// return this.currentUser;
  	// }
}
