import { Component } from '@angular/core';
import { PostListItemComponent } from "../post-list-item/post-list-item.component";
import { AddPostComponent } from '../add-post/add-post.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-list',
  imports: [PostListItemComponent,PostListItemComponent,AddPostComponent,FormsModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  posts:string[] = []

  addNewPostFromChild(postTitle:string){
    this.posts.push(postTitle)
}}
