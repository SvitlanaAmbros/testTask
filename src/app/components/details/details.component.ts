import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';
import { ItemService } from '../../services/item.service';  
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserDB } from '../../models/UserDB';
// import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {
  items:UserDB[];
  currentUser:UserDB;
  id:string;

  constructor(private router:Router,
              private authorization: AuthorizationService,
              private itemService: ItemService,
              private route: ActivatedRoute) { 

  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.itemService.getItems().subscribe(items => {
      this.items = items;
      // console.log(this.id)
      this.currentUser = this.getCurrentUser(this.id);
    });

    // this.id = this.route.snapshot.paramMap.get('id');
    // this.getCurrentUser();
  }

  getCurrentUser(id:string) {
    // for(let user  in this.items) {
    //   if(user.id == id) {
    //     return user;
    //   }
    // }

    // for (let i = 0; i < this.items.length; i++){
    //   alert(this.items[i].id)
    //   alert(id)
    //   // alert(this.items[i].id == id)
    //   if(this.items[i].id == id) {
    //     return this.items[i];
    //   }
    // }
    // console.log(this.items.find(item => item.id == this.id))
    return this.items.find(item => item.id == id);
  }

  edit() {
  	this.router.navigateByUrl('edit');
  }

  logout(){
    this.authorization.logout();
    this.router.navigateByUrl('');
  }

}
