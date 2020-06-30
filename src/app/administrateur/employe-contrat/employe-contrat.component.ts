import { Component, OnInit } from '@angular/core';
import { ContratService } from 'src/app/shared/contrat.service';
import { EmployeService } from 'src/app/shared/employe.service';
import { EmployeContratService } from 'src/app/shared/employeContrat.service';
import { Employecontrat } from 'src/app/models/EmployeContrats.models';


@Component({
  selector: 'app-employe-contrat',
  templateUrl: './employe-contrat.component.html',
  styleUrls: ['./employe-contrat.component.scss']
})
export class EmployeContratComponent implements OnInit {
  id: number;
  idemploye: number;
  idcontrat: number;
  dateSignature: Date;
  t: Employecontrat[] = [];



  constructor(public service: EmployeContratService, public contr: ContratService, public uow: EmployeService) { }

  ngOnInit(): void {

    this.service.employescontrat = {

      id: 0,
      idemploye: 0,
      idcontrat: null,
      dateSignature: null,
      employe: null,
      contrat: null
    },

      this.getall();
    this.contr.getall();
    this.uow.getall();



  }
  getall() {

    this.service.getall().subscribe(r => {
      this.service.employescontrats = r as any;
      this.t = r as any
      console.log(r);
    });
  }
  filldataEC(item) {
    this.service.employescontrat = item;

  }

  filldata(item) {

    this.contr.contrat.id = item.id;
    this.contr.contrat.type = item.type;
    this.contr.contrat.datedebut = item.datedebut;
    this.contr.contrat.datefin = item.datefin;

  }


  filldataE(item) {

    this.uow.employe.id = item.id;
    this.uow.employe.Prenom = item.Prenom;
    this.uow.employe.Nom = item.Nom;

  }



  submit() {

    this.service.post().subscribe(res => {
      this.getall();
      console.log(res);
    },
      err => {
        console.log(err);
      }
    );
  }
  RecharcheDateSignature() {

    if (this.service.employescontrat.dateSignature === null) {

      this.t = this.service.employescontrats;

    } else {
      this.t = this.service.employescontrats.filter(e => e.dateSignature === this.service.employescontrat.dateSignature);

    }
  }

  modifier() {

    this.service.put().subscribe(res => {
      this.getall();
      console.log(res);
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
  restaurertable() {
    this.getall();
  }
  search(id) {

    this.service.get(id).subscribe(res => {

      this.filldataEC(res);

      console.log(res);
    },
      err => {
        console.log(err);
      }
    );

  }



}

