import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
@Component({
  selector: 'app-post-item',
  standalone: false,
  
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.css'
})
export class PostItemComponent {
  posts: any[] = [];
  constructor(public postService: PostService) {}

   ngOnInit(): void {
    this.posts = this.postService.getPosts()
     console.log(this.posts); 
   }
}
