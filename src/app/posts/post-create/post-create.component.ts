import { Component, EventEmitter, Output } from '@angular/core';

interface Post {
  title: string;
  content: string;
}

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  @Output() postAdded = new EventEmitter<Post>();  // EventEmitter with Post type
  enteredTitle = '';
  enteredContent = '';

  onAddPost() {
    if (this.enteredTitle.trim() && this.enteredContent.trim()) {
      const newPost: Post = {
        title: this.enteredTitle,
        content: this.enteredContent
      };

      this.postAdded.emit(newPost);  // Emit the new post

      // Reset the input fields after emitting the post
      this.enteredTitle = '';
      this.enteredContent = '';
    }
  }
}
