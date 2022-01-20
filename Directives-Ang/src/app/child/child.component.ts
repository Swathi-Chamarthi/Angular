import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() message:EventEmitter<string>= new EventEmitter<string>()

  passData(){
    this.message.emit("This Data has come from child component")
  }
  
  constructor() { }

  ngOnInit(): void { 
  }

}
