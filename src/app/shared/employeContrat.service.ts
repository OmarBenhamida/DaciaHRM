import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employe } from '../models/Employes.models';
import { Contrat } from '../models/Contrats.models';
import { Employecontrat } from '../models/EmployeContrats.models';

@Injectable({
  providedIn: 'root'
})
export class EmployeContratService {
  url = 'http://localhost:8000/api/employecontrats';
  employescontrats: Employecontrat[];
  employescontrat: Employecontrat;
  user: Employe;
  constructor(private http: HttpClient) { }

  get(id) {
    return this.http.get(this.url + '/' + id);

  }


  getall() {
    return this.http.get(this.url + '/getAll');
  }
  

  post() {
    console.log(this.employescontrat);

    delete this.employescontrat.employe;
    delete this.employescontrat.contrat;

    return this.http.post(this.url, this.employescontrat);
  }

  put() {
    delete this.employescontrat.employe;
    delete this.employescontrat.contrat;
    return this.http.put(this.url + '/' + this.employescontrat.id, this.employescontrat);
  }

  delete() {
    return this.http.delete(this.url + '/' + this.employescontrat.id);
  }




}
