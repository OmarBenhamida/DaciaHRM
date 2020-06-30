import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employe } from '../models/Employes.models';
import { EmployeCompetence } from '../models/EmployeCompetences.models';
import { Competence } from '../models/Competences.models';


@Injectable({
  providedIn: 'root'
})
export class EmployeCompetanceService {
  url = 'http://localhost:8000/api/employecompetences';
  employescompetences: EmployeCompetence[];
  employescompetence: EmployeCompetence;
  user: Employe;
  comp: Competence;
  constructor(private http: HttpClient) { }

get(id) {
  return this.http.get(this.url + '/' + id);

}


 getall() {
  this.http.get(this.url + '/getAll') .toPromise().then(
      res => {
          this.employescompetences = res as EmployeCompetence[];
          console.log(res);
      }
  );
}

post() {
  console.log(this.employescompetence);

  delete this.employescompetence.employe;
  delete this.employescompetence.competence;

  return this.http.post(this.url, this.employescompetence);
}

put() {
  delete this.employescompetence.employe;
  delete this.employescompetence.competence;
  return this.http.put(this.url + '/' + this.employescompetence.id, this.employescompetence);
}

delete() {
  return this.http.delete(this.url + '/' + this.employescompetence.id);
}




}
