import { Component, OnInit } from '@angular/core';
import { EmployeService } from 'src/app/shared/employe.service';
import { ContratService } from 'src/app/shared/contrat.service';
import { Router } from '@angular/router';
import { Contrat } from 'src/app/models/Contrats.models';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.scss']
})
export class ContratComponent implements OnInit {
  id: number;
  type: string;
  datedebut: Date;
  datefin: Date;
  t: Contrat[] = [];


  constructor(public service: ContratService, public uow: EmployeService, private router: Router) { }

  ngOnInit(): void {

    this.service.contrat = {


      id: 0,
      type: null,
      datedebut: null,
      datefin: null
    },


      this.getall();
    this.uow.getall();



  }
  
  getall() {

    this.service.getall().subscribe(r => {
      this.service.contrats = r as any;
      this.t = r as any
      console.log(r);
    });
  }

  selectionChange() {
    // this.t = this.service.conges;
    // this.service.conges = [];
    this.t = this.service.contrats.filter(e => +e.type === +this.service.contrat.type);

  
  }
  RecharcheDateDebut() {

    if (this.service.contrat.datedebut === null) {

      this.t = this.service.contrats;

    } else {
      this.t = this.service.contrats.filter(e => e.datedebut === this.service.contrat.datedebut);

    }
  }

  RecharcheDateFin() {

    if (this.service.contrat.datefin === null) {

      this.t = this.service.contrats;

    } else {
      this.t = this.service.contrats.filter(e => e.datefin === this.service.contrat.datefin);

    }
  }

  restaurertable() {
    this.getall();
  }

  imprimer() {

    this.router.navigate(['/administrateur/etatcontrat', +this.service.contrat.id]);


  }

  filldata(item) {

    this.service.contrat.id = item.id;
    this.service.contrat.type = item.type;
    this.service.contrat.datedebut = item.datedebut;
    this.service.contrat.datefin = item.datefin;

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



}

