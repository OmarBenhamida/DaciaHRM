import { Injectable } from '@angular/core';
import { Employe } from '../models/Employes.models';
import { Post } from '../models/Posts.models';
import { EmployePost } from '../models/EmployePosts.models';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  user: Employe = null;
  post: Post = null;
  employepost: EmployePost = null;
  constructor() { }
}
