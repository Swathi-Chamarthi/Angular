import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

values:any

constructor(private user:UserServiceService) { }

ngOnInit(): void {
  this.values=this.user.getData()
  
  }

}
