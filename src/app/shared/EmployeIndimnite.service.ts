import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employe } from '../models/Employes.models';

import { EmployeFormation } from '../models/EmployeFormations.models';
import { EmployeIndimnite } from '../models/EmployeIndimnites.models';

@Injectable({
  providedIn: 'root'
})
export class EmployeIndimniteService {
  url = 'http://localhost:8000/api/employeindimnites';
  employesindimnites: EmployeIndimnite[];
  employesindimnite: EmployeIndimnite;
  user: Employe;
  constructor(private http: HttpClient) { }

get(id) {
  return this.http.get(this.url + '/' + id);

}
getall() {
  return this.http.get(this.url + '/getAll');
     
}

post() {
  console.log(this.employesindimnite);

  delete this.employesindimnite.employe;
  delete this.employesindimnite.indimnite;

  return this.http.post(this.url, this.employesindimnite);
}

put() {
  delete this.employesindimnite.employe;
  delete this.employesindimnite.indimnite;
  return this.http.put(this.url + '/' + this.employesindimnite.id, this.employesindimnite);
}

delete() {
  return this.http.delete(this.url + '/' + this.employesindimnite.id);
}




}
