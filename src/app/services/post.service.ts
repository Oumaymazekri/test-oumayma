import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
//export class PostService {
  //posts: Post[] = [
    //new Post('1', 'Post 1', 'Contenu du post 1'),
    //new Post('2', 'Post 2', 'Contenu du post 2'),
    //new Post('3', 'Post 3', 'Contenu du post 3'),
    //new Post('4', 'Post 4', 'Contenu du post 4'),
  //];

  //getPosts() {
   // return this.posts;
  //}

  //onstructor() { }
//}

export class PostService {
  private apiUrl = 'http://localhost:3001/post';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }
}
