import { Component, OnInit } from '@angular/core';
import { EmployeService } from 'src/app/shared/employe.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.scss']
})

export class EmployeComponent implements OnInit {

  id: number;
  Marticule: string;
  Nom: string;
  Prenom: string;
  cin: string;
  adresse: string;
  dateNaissance: Date;
  sexe: string;
  dateEmbauche: Date;
  nbrEnfant: number;
  cnss: number;
  email: string;
  passwd: string;
  role: number;



  constructor(public service: EmployeService,private router: Router) { }

  ngOnInit(): void {

    this.service.employe = {

      id: 0,
      Marticule: null,
      Nom: null,
      Prenom: null,
      cin: null,
      adresse: null,
      dateNaissance: null,
      sexe: null,
      dateEmbauche: null,
      nbrEnfant: 0,
      cnss: 0,
      email: null,
      passwd: null,
      role: 0,
    },

      this.service.getall();
  }

  filldata2(item) {


    this.service.employe = item;
    this.router.navigate(['/administrateur/detailsemp']);


  }


  filldata(item) {

    this.service.employe.id = item.id;
    this.service.employe.Marticule = item.Marticule;
    this.service.employe.Nom = item.Nom;
    this.service.employe.Prenom = item.Prenom;
    this.service.employe.cin = item.cin;
    this.service.employe.adresse = item.adresse;
    this.service.employe.dateNaissance = item.dateNaissance;
    this.service.employe.sexe = item.sexe;
    this.service.employe.dateEmbauche = item.dateEmbauche;
    this.service.employe.nbrEnfant = item.nbrEnfant;
    this.service.employe.cnss = item.cnss;
    this.service.employe.email = item.email;
    this.service.employe.passwd = item.passwd;
    this.service.employe.role = item.role;

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
  RecharcheMatricule(Marticule) {

    this.service.getbyMatricule(Marticule).subscribe(res => {

      this.filldata(res);

      console.log(res);
    },
      err => {
        console.log(err);
      }
    );
  }

  RecharcheCin(cin) {

    this.service.getbyCin(cin).subscribe(res => {

      this.filldata(res);

      console.log(res);
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

