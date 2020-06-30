import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employe } from '../models/Employes.models';
import { Diplome } from '../models/Diplomes.models';

@Injectable({
    providedIn: 'root'
})
export class DiplomeService {
    url = 'http://localhost:8000/api/diplomes';
    diplomes: Diplome[];
    diplome: Diplome;
    user: Employe;
    constructor(private http: HttpClient) { }

    // RemplirTableau() {

    //   return this.http.get(this.url + '/RemplirTableau').toPromise().then(
    //     res => {
    //       this.oms = res as Diplome[];
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

    getall2() {
        this.http.get(this.url).toPromise().then( 
            res => {
                this.diplomes = res as Diplome[];
            }
        );
    }

    post() {
        console.log(this.diplome)
        delete this.diplome.employe;
        return this.http.post(this.url, this.diplome);
    }

    put() {
        delete this.diplome.employe;
        return this.http.put(this.url + '/' + this.diplome.id, this.diplome);
    }

    delete() {

        return this.http.delete(this.url + '/' + this.diplome.id);
    }




}
