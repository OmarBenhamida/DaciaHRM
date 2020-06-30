import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrdreMission } from '../models/OrdreMission.models';
import { Employe } from '../models/Employes.models';

@Injectable({
    providedIn: 'root'
})
export class OrdreMissionService {
    url = 'http://localhost:8000/api/ordremissions';
    oms: OrdreMission[];
    om: OrdreMission;
    user: Employe;
    constructor(private http: HttpClient) { }

    // RemplirTableau() {

    //   return this.http.get(this.url + '/RemplirTableau').toPromise().then(
    //     res => {
    //       this.oms = res as OrdreMission[];
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
                this.oms = res as OrdreMission[];
            }
        );
    }

    post() {
        delete this.om.employe;
        return this.http.post(this.url, this.om);
    }

    put() {
        delete this.om.employe;
        return this.http.put(this.url + '/' + this.om.id, this.om);
    }

    delete() {
        return this.http.delete(this.url + '/' + this.om.id);
    }




}
