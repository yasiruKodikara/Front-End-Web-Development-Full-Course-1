import { Component, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  childMsg:string = 'this is the msg 1 from child to parent';

  @Output() dataEmitter = new EventEmitter<string>();

  sendData(){
    this.dataEmitter.emit(this.childMsg);
  }
}
