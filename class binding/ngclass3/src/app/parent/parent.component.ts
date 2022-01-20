import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  salesProducts=[
    {name:"mobile", price:12000},
    {name:"laptop", price:70000},
    {name:"car", price:250000},
    {name:"bike", price:85000}
  ]
  
  newProducts=[
    {name:"books", price:500},
    {name:"copy", price:400},
    {name:"pen", price:300},
    {name:"pencil", price:200}
  ]

  ngOnInit(): void {
  }



}
