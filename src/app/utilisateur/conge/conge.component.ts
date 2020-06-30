import { Component, OnInit } from '@angular/core';
import { CongeService } from 'src/app/shared/conge.service';
import { EmployeService } from 'src/app/shared/employe.service';
import { Conge } from 'src/app/models/Conges.models';
import { SessionService } from 'src/app/shared/session.service';
import { Employe } from 'src/app/models/Employes.models';

@Component({
  selector: 'app-conge',
  templateUrl: './conge.component.html',
  styleUrls: ['./conge.component.scss']
})
export class CongeComponent implements OnInit {

  id: number;
  type: string;
  datedebut: Date;
  datefin: Date;
  etat: string;
  idemploye: number;
  employe: Employe;
  totalDate = 0;
  totalConge = 0;

  t: Conge[] = [];


  constructor(public service: CongeService, public uow: EmployeService, public session: SessionService) { }

  ngOnInit(): void {

    this.service.conge = {


      id: 0,
      type: null,
      etat: null,
      datedebut: null,
      datefin: null,
      idemploye: null,
      employe: null


    },


     this.getall();
    this.uow.getall();


  }
  getall(){

    this.service.getall().subscribe((r: Conge[]) => {
      this.service.conges = r.filter(e => e.idemploye === this.session.user.id) as any;

      this.t = this.service.conges;
      this.totalDate = 0;
      this.totalDeffDate();
    });
  }

  dateDeff(d1: Date, d2: Date) {
    // tslint:disable-next-line:variable-name
    const difference_In_Time = new Date(d2).getTime() - new Date(d1).getTime();

    return difference_In_Time / (1000 * 3600 * 24);
  }

  totalDeffDate() {
    this.t.filter(e => e.etat === 'Approuvé').forEach(e => {
      const t = this.dateDeff(e.datedebut, e.datefin);
      this.totalDate += t;
    });

    const uniqYears = [...new Set(this.t.map(e => new Date(e.datedebut).getFullYear()))];

    this.totalConge = uniqYears.length * 30;
  }

  filldata(item) {

    this.service.conge = item;



  }


  filldataE(item) {

    this.uow.employe.id = item.id;
    this.uow.employe.Prenom = item.Prenom;
    this.uow.employe.Nom = item.Nom;

  }

  selectionChange() {
    // this.t = this.service.conges;
    // this.service.conges = [];
    this.t = this.service.conges.filter(e => +e.idemploye === +this.service.conge.idemploye);

    this.totalDate = 0;
    this.totalDeffDate();
  }



  submit() {
    console.log(this.service.conge);
    this.service.conge.idemploye = this.session.user.id;
    this.service.conge.etat = 'En attente';
    this.service.post().subscribe(res => {
      this.getall();
    },
      err => {
        console.log(err);
      }
    );
  }


  modifier() {

    this.service.put().subscribe(res => {
      this.service.getall();
    },
      err => {
        console.log(err);
      }
    );
  }

  supprimer() {

    this.service.delete().subscribe(res => {
      this.service.getall();
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



}

