import { Component } from '@angular/core';

import { MyService3} from '../services/my-service3.service';

@Component({
  selector: 'app-user2',
  imports: [],
  templateUrl: './user2.component.html',
  styleUrl: './user2.component.css'
})
export class User2Component {
  message3:String = '';

  constructor(private myService:MyService3){
    this.message3 = this.myService.MotherMessage3;
    
  }

  


}
