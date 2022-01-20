import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
result:any
  constructor(private user:UserService) { }

  ngOnInit() {

    this.user.getData().subscribe(data=>{
      this.result=data
    })
  }

}
