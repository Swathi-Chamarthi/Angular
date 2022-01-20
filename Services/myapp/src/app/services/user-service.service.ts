import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

getData(){
  return [
    {name:"swathi", department:"developer", id:101},
    {name:"naveen", department:"developer", id:102},
    {name:"prasanna", department:"developer", id:103},
    {name:"sai", department:"developer", id:104},
    {name:"madhav", department:"developer", id:105},
    {name:"teja", department:"developer", id:106}
  ]}
  
  constructor() { }
}
