import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, OnChanges, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {
uname:any
flag=false

@ViewChildren("header") elem:QueryList<any>

toggleChild(){
  this.flag=!this.flag
}
  constructor() { 
    console.log("parent constructor has been called");
  }

  ngOnInit() {
    console.log("parent onInit has been called  "+this.elem);  
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("parent onChanges has been called");  
  }

  ngDoCheck(): void {
    console.log("parent doCheck has been called");
  }

  ngAfterViewInit(): void {
    console.log("parent afterViewInit has been called"); 
    console.log(this.elem); 
  }

  ngAfterViewChecked(): void {
      console.log("parent afterViewChecked has been called");
  }

  ngAfterContentInit(): void {
      console.log("parent afterContentInit has been called");    
  }
  ngAfterContentChecked(): void {
      console.log("parent afterContentChecked has been called");    
  }
  
}

