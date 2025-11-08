import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  childMsg:string = 'this child msg';
  userName:string = 'akon';
  private salary:number = 1000;
  protected age:number = 30
}
