import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employe } from '../models/Employes.models';
import { Contrat } from '../models/Contrats.models';

@Injectable({
  providedIn: 'root'
})
export class ContratService {
  url = 'http://localhost:8000/api/contrats';
  contrats: Contrat[];
  contrat: Contrat;
  user: Employe;
  constructor(private http: HttpClient) { }

  // RemplirTableau() {

  //   return this.http.get(this.url + '/RemplirTableau').toPromise().then(
  //     res => {
  //       this.oms = res as Contrat[];
  //       console.log(res);
  //     }
  //   );
  // }



get(id) {
  return this.http.get(this.url + '/' + id);

}

getall() {
  return this.http.get(this.url + '/getAll');
}

post() {
  return this.http.post(this.url, this.contrat);
}

put() {
  return this.http.put(this.url + '/' + this.contrat.id, this.contrat);
}

delete() {
  return this.http.delete(this.url + '/' + this.contrat.id);
}




}
