import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directives_1';
  name:string = 'Akon';
  isLoggedIn:boolean = true;
  status:string = 'success';
  marks:number = 50;
  isVisible:boolean = true;
  role:string = 'admin'; //editor , admin
  


  clickBtn(){
    this.isVisible = !this.isVisible;
  }
}
