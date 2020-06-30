import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employe } from '../models/Employes.models';
import { Contrat } from '../models/Contrats.models';
import { Formation } from '../models/Formations.models';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  url = 'http://localhost:8000/api/formations';
  formations: Formation[];
  formation: Formation;
  user: Employe;
  constructor(private http: HttpClient) { }

  // RemplirTableau() {

  //   return this.http.get(this.url + '/RemplirTableau').toPromise().then(
  //     res => {
  //       this.oms = res as formation[];
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
  return this.http.post(this.url, this.formation);
}

put() {
  return this.http.put(this.url + '/' + this.formation.id, this.formation);
}

delete() {
  return this.http.delete(this.url + '/' + this.formation.id);
}




}
