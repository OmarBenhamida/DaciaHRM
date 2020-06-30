import { Component, OnInit } from '@angular/core';
import { DiplomeService } from 'src/app/shared/diplome.service';
import { EmployeService } from 'src/app/shared/employe.service';
import { Diplome } from 'src/app/models/Diplomes.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diplome',
  templateUrl: './diplome.component.html',
  styleUrls: ['./diplome.component.scss']
})
export class DiplomeComponent implements OnInit {

  id: number;
  libelle: string;
  ref: string;
  idemploye: number;
  t: Diplome[] = [];

  //employes = this.uow.getall();
  employe = this.uow.get(this.idemploye);

  constructor(public service: DiplomeService, public uow: EmployeService, private router: Router) { }

  ngOnInit(): void {

    this.service.diplome = {

      id: 0,
      ref: null,
      libelle: null,
      idemploye: null,
      employe: null

    },

      //this.service.RemplirTableau();

      this.getall();
    this.uow.getall();

    //this.employes = this.uow.getall();
    //this.employe = this.uow.get(this.idemploye);

  }

  filldata(item) {

    this.service.diplome = item;


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
  getall() {

    this.service.getall().subscribe(r => {
      this.service.diplomes = r as any;
      this.t = r as any
      console.log(r);
    });
  }

  selectionChange() {
    // this.t = this.service.diplomes;
    // this.service.diplomes = [];
    this.t = this.service.diplomes.filter(e => +e.idemploye === +this.service.diplome.idemploye);

  }

  RecharcheReference() {

    if (this.service.diplome.ref === null) {

      this.t = this.service.diplomes;
      

    } else {
      this.t = this.service.diplomes.filter(e => e.ref === this.service.diplome.ref);
      console.log(this.t);
    }
  }



  restaurertable() {
    this.getall();
  }

  imprimer() {

    this.router.navigate(['/administrateur/etatdiplome', +this.service.diplome.id]);


  }



}

