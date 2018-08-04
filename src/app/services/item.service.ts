import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserDB } from '../models/UserDB';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
	itemsCollection: AngularFirestoreCollection<UserDB>;
  	items: Observable<UserDB[]>;

	constructor(private afs: AngularFirestore) { 
  	this.itemsCollection = this.afs.collection('detail');

  		this.items = this.itemsCollection.snapshotChanges().pipe(
	    	map(actions => actions.map(a => {
	    		const data = a.payload.doc.data() as UserDB;
		        data.id = a.payload.doc.id;
		        console.log(data);
		        return data;
	    	}))
	    );
	}

  	getItems() {
  		return this.items;
  	}
}
