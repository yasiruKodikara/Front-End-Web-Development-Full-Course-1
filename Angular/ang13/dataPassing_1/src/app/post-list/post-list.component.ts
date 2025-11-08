import { Component } from '@angular/core';
import { PostListItemComponent } from '../post-list-item/post-list-item.component';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-post-list',
  imports: [PostListItemComponent,FormsModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  postListTitle:string = 'this is the data from parent to child 1';

  posts:string[]=['post1','post2','post3','post4'];

  postTitle3:string = '';

  posts2:string[] = [];

  addNewPost(){
    this.posts2.push(this.postTitle3);
  }



}
