import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';

  val = "Test Yantra"

  isSpecial:boolean=false
  c1="blue"
  c2="pink"

  isSpecial1:boolean=true

  colval=2

display(){
  console.log("inside the display function");
}

displayResult=""
}