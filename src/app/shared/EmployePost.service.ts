import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employe } from '../models/Employes.models';
import { Post } from '../models/Posts.models';
import { EmployePost } from '../models/EmployePosts.models';

@Injectable({
  providedIn: 'root'
})
export class EmployePostService {
  url = 'http://localhost:8000/api/employeposts';
  employesposts: EmployePost[];
  employespost: EmployePost;

    constructor(private http: HttpClient) { }
  
  get(id) {
    return this.http.get(this.url + '/' + id);
  
  }
  
  
   getall() {
    this.http.get(this.url + '/getAll') .toPromise().then(
        res => {
            this.employesposts = res as EmployePost[];
            console.log(res);
        }
    );
  }
  
  post() {
    console.log(this.employespost);
  
    delete this.employespost.employe;
    delete this.employespost.post;
  
    return this.http.post(this.url, this.employespost);
  }
  
  put() {
    delete this.employespost.employe;
    delete this.employespost.post;
    return this.http.put(this.url + '/' + this.employespost.id, this.employespost);
  }
  
  delete() {
    return this.http.delete(this.url + '/' + this.employespost.id);
  }
  
  
  
  
  }
  