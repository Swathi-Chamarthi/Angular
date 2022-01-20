import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

getData(){
  return [
    {name:"swathi", department:"development", id:101},
    {name:"naveen", department:"development", id:102},
    {name:"prasanna", department:"development", id:103},
    {name:"sai", department:"development", id:104},
    {name:"madhav", department:"development", id:105},
    {name:"teja", department:"development", id:106}
  ]
}
  constructor() { }
}
