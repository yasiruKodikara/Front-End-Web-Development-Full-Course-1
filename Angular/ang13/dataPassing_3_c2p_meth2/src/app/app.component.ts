import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { PostListComponent } from './post-list/post-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UserComponent,PostListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '';

  handleDataFromChild(message:string){
    this.title = message
  }
}
