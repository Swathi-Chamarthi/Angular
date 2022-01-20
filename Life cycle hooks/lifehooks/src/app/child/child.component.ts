import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  counter:number=0
  interval:any
  @Input() uname

  constructor() {
    console.log("child component has been called");
   }

  ngOnInit() {
    console.log("child OnInit has been called");
    // this.interval=setInterval(()=>{
    //   this.counter++
    //   console.log(this.counter);
    // },1000)
    
  }
ngOnDestroy(): void{
console.log("child component has been destroyed");
// clearInterval(this.interval)
}

ngOnChanges(changes: SimpleChanges): void {
  console.log("child OnChanges has been called");
  console.log(changes);   
}

ngDoCheck(): void {
    console.log("child DoCheck has been called");    
}

ngAfterContentInit(): void {
    console.log("child AfterContentInit has been called");
}

ngAfterContentChecked(): void {
    console.log("child AfterContentChecked has been called");
}

ngAfterViewInit(): void {
    console.log("child AfterViewInit has been called");
}

ngAfterViewChecked(): void {
    console.log("child AfterViewChecked has been called");
}

}

