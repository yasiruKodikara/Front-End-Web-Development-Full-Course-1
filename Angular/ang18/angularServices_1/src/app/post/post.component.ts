import { Component,Input } from '@angular/core';
import { MyService } from '../services/myService.service';
import { Service5Service } from '../services/service-5.service';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  message2:string = '';
  myService:MyService;

  message3:string = '';
  service5:Service5Service;

  constructor(){
    this.myService = new MyService();
    this.message2 = this.myService.MotherMessage;
    
    this.service5 = new Service5Service();
    this.message3 = this.service5.momMsg;
  }

  
}
