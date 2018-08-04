import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private router:Router,private authorization: AuthorizationService) { }

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
