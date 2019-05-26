import { Injectable } from '@angular/core';
import { Post } from '../Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postsList: Array<Post>;

  constructor() { 
    this.postsList = [];
  }

  addPost(newPost: Post){
    this.postsList.push(newPost);
    console.log('lista de posts: ', this.postsList);
  }

  getAllPosts():Array<Post>{
    return this.postsList;
  }
}
