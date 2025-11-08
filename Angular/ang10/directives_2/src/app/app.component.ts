import { NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgFor,NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'directives_2';
  students:string[] = ['abc','def','xyz'];
  role:string='admin0';

  users:User[] = [
    {id:1,name:'akon',email:'akon@gmail.com'},
    {id:2,name:'bkon',email:'bkon@gmail.com'},
    {id:3,name:'ckon',email:'ckon@gmail.com'},
  ];
admin: any;

  addNewUser(){
    let len = this.users.length
    let user:User = {id:len+1,name:`user${len+1}`,email:`user${len+1}@gmail.com`}
    this.users.push(user)
  }
  deleteUser(user:User){
    let index = this.users.indexOf(user);
    this.users.splice(index,1);
  }

  nestedItems:{category:string,items:string[]}[]=[
    {category:'fruits',items:['apple','orange','banana']},
    {category:'animals',items:['dog','cat','dragon']}

  ]

}

interface User{
  id:number,
  name:string,
  email:string
}
