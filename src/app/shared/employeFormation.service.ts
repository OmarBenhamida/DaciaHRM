import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employe } from '../models/Employes.models';

import { EmployeFormation } from '../models/EmployeFormations.models';

@Injectable({
  providedIn: 'root'
})
export class EmployeFormationService {
  url = 'http://localhost:8000/api/employeformations';
  employesformations: EmployeFormation[];
  employesformation: EmployeFormation;
  user: Employe;
  constructor(private http: HttpClient) { }

get(id) {
  return this.http.get(this.url + '/' + id);

}
getall() {
  this.http.get(this.url + '/getAll') .toPromise().then(
      res => {
          this.employesformations = res as EmployeFormation[];
          console.log(res);
      }
  );
}

post() {
  console.log(this.employesformation);

  delete this.employesformation.employe;
  delete this.employesformation.formation;

  return this.http.post(this.url, this.employesformation);
}

put() {
  delete this.employesformation.employe;
  delete this.employesformation.formation;
  return this.http.put(this.url + '/' + this.employesformation.id, this.employesformation);
}

delete() {
  return this.http.delete(this.url + '/' + this.employesformation.id);
}




}
