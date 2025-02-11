import { Component, Input } from '@angular/core';

// Define the Post type
interface Post {
  title: string;
  content: string;
}

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.create.component.html',
  styleUrls: ['./post-list.create.component.css']
})
export class PostListComponent {
  @Input() posts: Post[] = [];  // Explicitly typed as Post array
}
