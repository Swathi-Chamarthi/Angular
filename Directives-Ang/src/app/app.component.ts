import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users=[
    {name:"Raju", age:55},
    {name:"Prasanna", age:43},
    {name:"Swathi", age:23},
    {name:"Naveen", age:21},

  ]

  selectedCountry="uk"
  
  flag:boolean=true

  change(){
    if(this.flag==true){
      this.flag=false;
    }
    else{
      this.flag=true;
    }
  }

  title = 'project';

}
