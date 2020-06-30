import { Component, OnInit } from '@angular/core';
import { EmployeCongeService } from 'src/app/shared/employeConge.service';
import { CongeService } from 'src/app/shared/conge.service';
import { EmployeService } from 'src/app/shared/employe.service';

@Component({
  selector: 'app-employe-conge',
  templateUrl: './employe-conge.component.html',
  styleUrls: ['./employe-conge.component.scss']
})
export class EmployeCongeComponent implements OnInit {

  id: number;
  idemploye: number;
  idconge: number;
  etat: string;



  constructor(public serviceEC: EmployeCongeService,
              public serviceC: CongeService,
              public uow: EmployeService) { }

  ngOnInit(): void {

    this.serviceEC.employesconge = {

      id: 0,
      
      idemploye: 0,
      idconge: null,
      etat: null
    },

      this.serviceEC.getall();
    this.serviceC.getall();
    this.uow.getall();



  }
  filldataEC(item) {
    this.serviceEC.employesconge.id = item.id;

    this.serviceEC.employesconge.idemploye = item.idemploye;
    this.serviceEC.employesconge.idconge = item.idconge;
    this.serviceEC.employesconge.etat = item.etat;

  }

  filldata(item) {

    this.serviceC.conge.id = item.id;
    this.serviceC.conge.type = item.type;
    this.serviceC.conge.datedebut = item.datedebut;
    this.serviceC.conge.datefin = item.datefin;

  }


  filldataE(item) {

    this.uow.employe.id = item.id;
    this.uow.employe.Prenom = item.Prenom;
    this.uow.employe.Nom = item.Nom;

  }



  submit() {

    this.serviceEC.post().subscribe(res => {
      this.serviceEC.getall();
      console.log(res);
    },
      err => {
        console.log(err);
      }
    );
  }


  modifier() {

    this.serviceEC.put().subscribe(res => {
      this.serviceEC.getall();
      console.log(res);
    },
      err => {
        console.log(err);
      }
    );
  }

  supprimer() {

    this.serviceEC.delete().subscribe(res => {
      this.serviceEC.getall();
    },
      err => {
        console.log(err);
      }
    );
  }
  search(id) {

    this.serviceEC.get(id).subscribe(res => {

      this.filldataEC(res);

      console.log(res);
    },
      err => {
        console.log(err);
      }
    );

  }



}

