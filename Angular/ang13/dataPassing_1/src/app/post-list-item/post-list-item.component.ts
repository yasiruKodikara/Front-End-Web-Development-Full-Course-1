import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  imports: [],
  templateUrl: './post-list-item.component.html',
  styleUrl: './post-list-item.component.css'
})
export class PostListItemComponent {
  @Input() postListItemTitle:string = '';
  //@Input (postListItemTitle) postTitle:string = ''; // if the postListItemTitle get another name in post-list-item.component.ts;

  @Input() postListItemTitle2:string = '';

  @Input() postListItemTitle3:string = '';
  };

   
