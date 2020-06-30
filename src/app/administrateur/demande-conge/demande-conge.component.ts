import { Component, OnInit } from '@angular/core';
import { DemandeCongeService } from 'src/app/shared/demandeconge.service';
import { EmployeService } from 'src/app/shared/employe.service';
import { Employe } from 'src/app/models/Employes.models';

@Component({
  selector: 'app-demande-conge',
  templateUrl: './demande-conge.component.html',
  styleUrls: ['./demande-conge.component.scss']
})
export class DemandeCongeComponent implements OnInit {

  id: number;
  type: string;
  datedebut: Date;
  dateFin: Date;
  idemploye: number;

  employe = this.uow.get(this.idemploye);

  constructor(public service: DemandeCongeService, public uow: EmployeService) { }

  ngOnInit(): void {

    this.service.demandeconge = {

      id: null,
      type: null,
      datedebut: null,
      dateFin: null,
      etat : null,
      idemploye: null,
      employe: null

    },


      this.service.getall();
    this.uow.getall();


  }

  filldata(item) {

    this.service.demandeconge.id = item.id;
    this.service.demandeconge.type = item.type;
    this.service.demandeconge.datedebut = item.datedebut;
    this.service.demandeconge.dateFin = item.dateFin;
    this.service.demandeconge.dateFin = item.dateFin;
    this.service.demandeconge.etat = item.etat;

    this.service.demandeconge.idemploye = item.idemploye;


  }


  filldataE(item) {

    this.uow.employe.id = item.id;
    this.uow.employe.Prenom = item.Prenom;
    this.uow.employe.Nom = item.Nom;

  }

  dateDeff(d1: Date, d2: Date) {
    const difference_In_Time = new Date(d2).getTime() - new Date(d1).getTime();

    return difference_In_Time / (1000 * 3600 * 24);
  }


  submit() {
    console.log();
    this.service.post().subscribe(res => {
      this.service.getall();
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

