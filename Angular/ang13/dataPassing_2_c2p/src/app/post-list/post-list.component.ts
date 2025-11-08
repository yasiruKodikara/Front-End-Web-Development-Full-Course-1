import { Component } from '@angular/core';
import { PostListItemComponent } from '../post-list-item/post-list-item.component';

@Component({
  selector: 'app-post-list',
  imports: [PostListItemComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  
  passing1:string = 'this is the passing1';
}
