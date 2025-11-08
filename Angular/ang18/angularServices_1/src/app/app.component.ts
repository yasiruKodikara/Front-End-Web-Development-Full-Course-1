import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
import { User2Component } from './user2/user2.component';
import { MyService } from './services/myService.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UserComponent,PostComponent,User2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  message3:string = '';
  myService:MyService;
  title = 'angularServices_1';

  constructor(){
    this.myService = new MyService();
    this.message3 = this.myService.MotherMessage;
  } ; 

}
