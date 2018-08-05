import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from '../../services/authorization.service';
import { ItemService } from '../../services/item.service'; 
import { UserDB } from '../../models/UserDB';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})

export class EditComponent implements OnInit {
	items:UserDB[];
	currentUser:UserDB;

	constructor(private router:Router,
  			private authorization: AuthorizationService,
  			private itemService: ItemService) { 
  		this.itemService.getItems().subscribe(items => {
	      	this.items = items;
	      	this.currentUser = this.itemService.getCurrentUser(this.items);
    });
  }

  ngOnInit() {
  }

  cancel() {
  	this.router.navigateByUrl('details');
  }

  save() {
    console.log(this.currentUser);
    this.itemService.updateUserInfo(this.currentUser);
    this.router.navigateByUrl('details');
  }

}
