import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employe } from '../models/Employes.models';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  url = 'http://localhost:8000/api/employes';
  employes: Employe[];
  employe: Employe;

  constructor(private http: HttpClient) { }


  get(id) {
    return this.http.get(this.url + '/' + id);

  }

  getall() {
    this.http.get(this.url).toPromise().then(
      res => {
        this.employes = res as Employe[];
      }
    );
  }

  post() {
    return this.http.post(this.url, this.employe);
  }

  put() {
    return this.http.put(this.url + '/' + this.employe.id, this.employe);
  }

  delete() {
    return this.http.delete(this.url + '/' + this.employe.id);
  }

  getbyMatricule(Matricule) {
    return this.http.get(this.url + '/getbyMatricule/' + Matricule);

  }

  getbyCin(cin) {
    return this.http.get(this.url + '/getbyCin/' + cin);

  }

  usersGet(id) {
    return this.http.get(this.url + '/usersGet/' + id);

  }

  // getbyMatricule() {
  //   console.log(this.employe.Marticule);
  //   this.http.get(this.url + '/getbyMatricule/' + this.employe.Marticule).toPromise().then(
  //     res => {
  //       this.employe = res as Employe;
  //     }
  //   );
  //   console.log(this.employe.Prenom);

  // }

}
