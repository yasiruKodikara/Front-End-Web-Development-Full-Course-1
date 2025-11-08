import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  imports: [FormsModule],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent {
  postTitle:string = '';

  @Output() postTitleEmitter = new EventEmitter<string>();

  addNewPost(){
    this.postTitleEmitter.emit(this.postTitle);
  }
}
