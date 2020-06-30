import { Component, OnInit } from '@angular/core';
import { EmployeService } from 'src/app/shared/employe.service';
import { Router } from '@angular/router';
import { FormationService } from 'src/app/shared/formation.service';
import { Formation } from 'src/app/models/Formations.models';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {

  id: number;
  intitule: string;
  lieu: string;
  datedebut: Date;
  datefin: Date;
  t: Formation[] = [];


  constructor(public service: FormationService, public uow: EmployeService, private router: Router) { }

  ngOnInit(): void {

    this.service.formation = {


      id: 0,
      intitule: null,
      lieu: null,
      datedebut: null,
      datefin: null
    },


      this.getall();
    this.uow.getall();



  }

  getall() {

    this.service.getall().subscribe(r => {
      this.service.formations = r as any;
      this.t = r as any
      console.log(r);
    });
  }

  selectionChange() {
    // this.t = this.service.conges;
    // this.service.conges = [];
    this.t = this.service.formations.filter(e => e.lieu === this.service.formation.lieu);
    console.log(this.t);
  }
  RecharcheDateDebut() {

    if (this.service.formation.datedebut === null) {

      this.t = this.service.formations;

    } else {
      this.t = this.service.formations.filter(e => e.datedebut === this.service.formation.datedebut);

    }
  }

  RecharcheDateFin() {

    if (this.service.formation.datefin === null) {

      this.t = this.service.formations;

    } else {
      this.t = this.service.formations.filter(e => e.datefin === this.service.formation.datefin);

    }
  }

  restaurertable() {
    this.getall();
  }

  imprimer() {

    this.router.navigate(['/administrateur/etatformation', +this.service.formation.id]);


  }

  filldata(item) {

    this.service.formation = item;

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

