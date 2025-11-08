import { Component, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{ UserComponent } from './user/user.component';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UserComponent,NgComponentOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angLifeCycleHooks_2';
  name:string = 'akon';

  constructor(private viewContainer:ViewContainerRef){

  }
//render a component using ViewContainerRef
  addComponent(){
    this.viewContainer.createComponent(UserComponent)
  }
  //render a component using  *ngComponentOutlet directive
  loadComponent(){
    return UserComponent;
  }

  removeComponent(){
    this.viewContainer.remove();
  }

  changeName(){
    this.name = 'Fkon';
  }
}
