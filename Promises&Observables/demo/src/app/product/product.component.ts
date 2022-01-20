import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  users=[
    {name:"swathi", city:"bangalore", id:101, sal:24000, dob:new Date("10 jun 1998")},
    {name:"sai", city:"telangana", id:102, sal:44000, dob:new Date("3 jul 1996")},
    {name:"naveen", city:"andhra", id:103, sal:8000, dob:new Date("15 apr 2000")},
    {name:"prasanna", city:"kerala", id:104, sal:18000, dob:new Date("4 jun 1978")}

  ]


  constructor() { }

  ngOnInit(): void {
    // const observable = new Observable(sub => {sub.next(Math.random());})

    // //1st listner
    // observable.subscribe(result => {console.log(result);})

    // //2nd listner
    // observable.subscribe(result => {console.log(result);})

    // const subject = new Subject()

    // //1st listner
    // subject.subscribe(result =>{console.log(result);})

    // //2nd listner
    // subject.subscribe(result =>{console.log(result);})

    // subject.next(Math.random())

    
  }
}
