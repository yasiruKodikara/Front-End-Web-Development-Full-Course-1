import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { UserComponent } from './user/user.component';
 
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,PostListComponent,UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  title = 'dataPassing_2_c2p';
  msg:string = '';
    @ViewChild(UserComponent) userComponent! :UserComponent;

  constructor(){
    console.log(this.userComponent)
  }
  ngAfterViewInit(): void {
    console.log(this.userComponent)
    this.msg = this.userComponent.childMsg;
  }
}
