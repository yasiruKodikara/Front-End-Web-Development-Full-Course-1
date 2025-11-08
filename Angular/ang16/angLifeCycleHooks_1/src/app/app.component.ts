import { Component, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UserComponent,NgComponentOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angLifeCycleHooks_1';
  loadComponent(){
    return UserComponent
  };

  constructor(private viewContainer:ViewContainerRef){

  }

  addComponent(){
    this.viewContainer.createComponent(UserComponent)
  }

  removeComponent(){
    this.viewContainer.remove();
  }
}
