import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
@ViewChild("username")element!:ElementRef
num:any=`${Math.floor(Math.random()*100)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}`
Id:any
idGenerator(){
  let name=(this.element.nativeElement.value).substring(0,3).toUpperCase()
  this.Id="TYDEV"+name+this.num
}

val:any
  constructor(private user:UserServiceService) { }

  ngOnInit(): void {
    this.val=this.user.getData()
  }
  
}  


