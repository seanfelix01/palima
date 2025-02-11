import { Component } from '@angular/core';

interface Post {
  title: string;
  content: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'palima';

  // Initial empty posts array
  posts: Post[] = [];

  // Method to handle the addition of a new post
  addPost(newPost: Post) {
    this.posts.push(newPost);  // Add the new post to the posts array
  }
}
