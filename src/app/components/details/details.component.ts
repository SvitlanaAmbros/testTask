import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service'; 

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(public authorization: AuthorizationService) { }

  ngOnInit() {
  }

  logout(){
    this.authorization.logout();
  }

}
