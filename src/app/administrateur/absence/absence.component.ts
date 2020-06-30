import { Component, OnInit } from '@angular/core';
import { AbsenceService } from 'src/app/shared/absence.service';
import { EmployeService } from 'src/app/shared/employe.service';
import { Absence } from 'src/app/models/Absences.models';

@Component({
  selector: 'app-absence',
  templateUrl: './absence.component.html',
  styleUrls: ['./absence.component.scss']
})
export class AbsenceComponent implements OnInit {


  id: number;
  dateRetard: Date;
  type: boolean;
  justification: string;
  t: Absence[] = [];

  employe = this.uow.get(this.id);

  constructor(public service: AbsenceService, public uow: EmployeService) { }

  ngOnInit(): void {

    this.service.absence = {

      id: 0,
      dateRetard: null,
      type: null,
      justification: null,
      idemploye: null,
      employe: null

    },



      this.getall();
    this.uow.getall();


  }
  getall() {

    this.service.getall().subscribe(r => {
      this.service.absences = r as any;
      this.t = r as any;
      console.log(r);
    });
  }

  filldata(item) {

    this.service.absence.id = item.id;
    this.service.absence.dateRetard = item.dateRetard;
    this.service.absence.type = item.type;
    this.service.absence.justification = item.justification;


  }
  restaurertable(){
    this.getall();
  }


  filldataE(item) {

    this.uow.employe.id = item.id;
    this.uow.employe.Prenom = item.Prenom;
    this.uow.employe.Nom = item.Nom;

  }



  submit() {
    console.log();
    this.service.post().subscribe(res => {
      this.getall();
      console.log(res);
    },
      err => {
        console.log(err);
      }
    );
  }


  modifier() {

    this.service.put().subscribe(res => {
      this.getall();
    },
      err => {
        console.log(err);
      }
    );
  }

  supprimer() {

    this.service.delete().subscribe(res => {
      this.getall();
    },
      err => {
        console.log(err);
      }
    );
  }
  search(id) {

    this.service.get(id).subscribe(res => {

      this.filldata(res);

      console.log(res);
    },
      err => {
        console.log(err);
      }
    );

  }
  selectionChange() {
    // this.t = this.service.conges;
    // this.service.conges = [];
    this.t = this.service.absences.filter(e => +e.idemploye === +this.service.absence.idemploye);

  }
  RechercheParDate() {

    if (this.service.absence.dateRetard === null) {

      this.t = this.service.absences;

    } else {
      this.t = this.service.absences.filter(e => e.dateRetard === this.service.absence.dateRetard);

    }
  }



}

