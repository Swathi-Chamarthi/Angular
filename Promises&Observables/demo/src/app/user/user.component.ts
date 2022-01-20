import { importType } from '@angular/compiler/src/output/output_ast';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy{
count=0
private mySub:Subscription
  constructor() { }

  ngOnInit(): void {
    const promise = new Promise(resolve => {
      
      setTimeout(() =>{
        resolve("Data 1 from promise"),
        resolve("Data 2 from promise"),
        resolve("Data 3 from promise"),
        resolve("Data 4 from promise")
    },1000)
  })

  //Listening the promise
  promise.then(result => {console.log(result);})

  //Observable
  const observable=new Observable(sub => {
  console.log("Obserable has been called");

  setInterval(()=>{
    sub.next("data from observable"+this.count++)
    // console.log("data from observable"+this.count);

    // sub.next("Data 1 from Observable")
    // sub.next("Data 2 from Observable")
    // sub.next("Data 3 from Observable")
    // sub.next("Data 4 from Observable")

  },1000)

})

  //Listening the Observable
  this.mySub=observable.subscribe(result =>{
    console.log(result); 
  })
  // observable.pipe(filter(data => data==="Data 2 from observable"))
  // .subscribe(result=>{console.log(result);})

}
ngOnDestroy(): void{
  console.log("User destroyed");
  this.mySub.unsubscribe()
}
}
