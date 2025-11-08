import { Component } from '@angular/core';
import { MyService } from '../services/myService.service';
import { MyService2 } from '../services/myService2.service';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  message:String = '';
  message2:String = '';
  myService:MyService;
  myService2:MyService2;

  constructor(){
    this.myService = new MyService();
    this.message = this.myService.MotherMessage;

    this.myService2 = new MyService2();
    this.message2 = this.myService2.getTheMessage2;
  }

  changeMessage(){
    this.myService2.updateMessage('new message');
    this.message2 = this.myService2.getTheMessage2;
  }
}
