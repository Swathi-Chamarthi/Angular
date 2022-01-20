import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-swathi',
  templateUrl: './swathi.component.html',
  styleUrls: ['./swathi.component.css']
})
export class SwathiComponent implements OnInit {

  data:any
  constructor(private user:UserServiceService) { }

  ngOnInit(): void {
    this.data=this.user.getData()
  }

}
