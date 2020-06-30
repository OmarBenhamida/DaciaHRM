import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employe } from '../models/Employes.models';
import { Employecontrat } from '../models/EmployeContrats.models';
import { EmployeConge } from '../models/EmployeConges.models';

@Injectable({
  providedIn: 'root'
})
export class EmployeCongeService {
  url = 'http://localhost:8000/api/employeconges';
  employesconges: EmployeConge[];
  employesconge: EmployeConge;
  user: Employe;
  constructor(private http: HttpClient) { }

get(id) {
  return this.http.get(this.url + '/' + id);

}

getall() {
 this.http.get(this.url).toPromise().then(
     res => {
       this.employesconges = res as EmployeConge[];
       console.log(res);
     }
   );
 }

post() {
  return this.http.post(this.url, this.employesconge);
}

put() {
  return this.http.put(this.url + '/' + this.employesconge.id, this.employesconge);
}

delete() {
  return this.http.delete(this.url + '/' + this.employesconge.id);
}




}
