import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Employeretard } from '../models/EmployeRetards.models';
import { EmployeAbsence } from '../models/EmployeAbsences.models';

@Injectable({
    providedIn: 'root'
})
export class EmployeAbsenceService {
    url = 'http://localhost:8000/api/employeabsences';
    absences: EmployeAbsence[];
     absence: EmployeAbsence;

    constructor(private http: HttpClient) { }


    get(id) {
        return this.http.get(this.url + '/' + id);

    }

    getall() {
        this.http.get(this.url).toPromise().then(
            res => {
                this. absences = res as EmployeAbsence[];
            }
        );
    }

    post() {
        return this.http.post(this.url, this. absence);
    }

    put() {
        return this.http.put(this.url + '/' + this. absence.id, this. absence);
    }

    delete() {
        return this.http.delete(this.url + '/' + this. absence.id);
    }
}