import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularPractice_S02';
  students:string[] = ['Akon','Bkon','Ckon'];

  users:User[]=[
    {id:1,name:'akon',age:20},
    {id:2,name:'bkon',age:20},
    {id:3,name:'ckon',age:20}
  ];

  addNewUser(){
    let len = this.users.length
    let user:User = {id:len+1,name:`user${len+1}`,age:20}
    this.users.push(user)
    
  }
  deleteUser(user:User){
    let index = this.users.indexOf(user);
    this.users.splice(index,1)
  }
}

interface User{
  id:number,
  name:string,
  age:number
}