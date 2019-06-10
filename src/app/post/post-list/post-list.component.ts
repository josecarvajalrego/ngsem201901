import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/model/services/post.service';
import { Post } from 'src/app/shared/model/Post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  postsList:Array<Post>;

  constructor(private postService:PostService) { }

  ngOnInit() {
    this.postService.getAllPosts().subscribe(
      (postsList: Post[]) => {
        this.postsList = postsList;
      },
      () => {
        alert('Hubo un error al recuperar los posts');
      }
    );
  }



}
