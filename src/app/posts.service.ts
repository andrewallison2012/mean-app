import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllPosts() {
    return this.http.get('/api/posts')
      .map(res => res.json());
  }
  getAllTodos() {
    return this.http.get('/todo-api/todos/')
      .map(res => res.json());
  }
  getAllTodos2() {
    return this.http.get('/meanapp-dev/things/')
      .map(res => res.json());
  }
}