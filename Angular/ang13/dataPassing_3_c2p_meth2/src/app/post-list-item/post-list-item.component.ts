import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  imports: [],
  templateUrl: './post-list-item.component.html',
  styleUrl: './post-list-item.component.css'
})
export class PostListItemComponent {
  @Input() postListItemTitle:string = '';
  @Input() postTitle!: string;
  @Output() deletePostEmitter = new EventEmitter<string>();

  deletePost(){
    this.deletePostEmitter.emit(this.postTitle);
  }
}
