import { Component } from '@angular/core';

@Component({
  selector: 'post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {

enteredValue = ''
newPost = ''
  onAddPost(){
    console.log("otottt")

  this.newPost = this.enteredValue
  }
 
}