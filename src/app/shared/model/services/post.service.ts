import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Post } from '../Post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {
  }

  addPost(post: Post): Observable<Post> {
    return new Observable<Post>((observer) => {
      this.httpClient.post(`${environment.backEndBaseURL}`, post)
        .subscribe(
          (savedPost: Post) => {
            observer.next(savedPost);
          },
          (err: any) => {
            observer.error('Error guardando el producto');
          }
        );
    });
  }

  getAllPosts(): Observable<Post[]> {
    return new Observable<Post[]>((observer) => {
      this.httpClient.get(`${environment.backEndBaseURL}`)
        .subscribe(
          (postsList: Post[]) => {
            observer.next(postsList);
          },
          (err: any) => {
            observer.error('Error obteniendo los productos');
          }
        );
    });
  }
}
