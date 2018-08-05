import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';
import { ItemService } from '../../services/item.service';  
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserDB } from '../../models/UserDB';
// import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {
  itemsCollection: AngularFirestoreCollection<UserDB>;
  items:UserDB[];
  currentUser:UserDB;
  id:string;

  constructor(private afs: AngularFirestore,private router:Router,
              private authorization: AuthorizationService,
              private itemService: ItemService,
              private route: ActivatedRoute) { 
    
// this.itemsCollection = this.afs.collection('detail');

//       this.itemsCollection
//       .snapshotChanges()
//       .pipe(
//         map(actions => actions.map(a => {
//           const data = a.payload.doc.data() as UserDB;
//             data.id = a.payload.doc.id;
//             // console.log(data);
//             return data;
//         }))
//       ).subscribe(items => {
//       console.log("loading");
//       this.items = items;
//       this.currentUser = this.items[0];
//       console.log("qwe" + items)});


    this.itemService.getItems().subscribe(items => {
      this.items = items;
      this.currentUser = this.itemService.getCurrentUser(this.items);
    });
  }

  ngOnInit() {

  }

  edit() {
  	this.router.navigateByUrl('edit');
  }

  logout(){
    this.authorization.logout();
    this.router.navigateByUrl('');
  }

}
