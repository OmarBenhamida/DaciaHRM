import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employe } from '../models/Employes.models';
import { Post } from '../models/Posts.models';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'http://localhost:8000/api/posts';
  posts: Post[];
  poste: Post;

  constructor(private http: HttpClient) { }


  get(id) {
    return this.http.get(this.url + '/' + id);

  }

  getall() {
    this.http.get(this.url).toPromise().then(
      res => {
        this.posts = res as Post[];
      }
    );
  }

  post() {
    return this.http.post(this.url, this.poste);
  }

  put() {
    return this.http.put(this.url + '/' + this.poste.id, this.poste);
  }

  delete() 
  {
    return this.http.delete(this.url + '/' + this.poste.id);
  }
}