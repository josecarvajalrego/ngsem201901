import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/model/services/post.service';
import { Post } from 'src/app/shared/model/Post';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss']
})
export class PostAddComponent implements OnInit {

  post: Post;

  constructor(private postService:PostService) { 
    this.post = new Post();
  }

  ngOnInit() {
  }

  agregarPost(){
    this.postService.addPost(this.post);
    this.post = new Post();
  }
}
