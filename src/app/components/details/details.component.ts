import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';
import { ItemService } from '../../services/item.service';  
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { UserDB } from '../../models/UserDB';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {
  items:UserDB[];
  currentUser:UserDB;
  id:string;

  constructor(private afs: AngularFirestore,private router:Router,
              private authorization: AuthorizationService,
              private itemService: ItemService,
              private route: ActivatedRoute) { 
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
