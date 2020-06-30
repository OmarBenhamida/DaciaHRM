import { Component, OnInit } from '@angular/core';
import { CompetenceService } from 'src/app/shared/competence.service';
import { EmployeService } from 'src/app/shared/employe.service';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})
export class CompetenceComponent implements OnInit {

  id: number;
  libelle: string;


  employe = this.uow.get(this.id);

  constructor(public service: CompetenceService, public uow: EmployeService) { }

  ngOnInit(): void {

    this.service.competence = {

      id: 0,
      libelle: null,

    },



      this.service.getall();
      this.uow.getall();


  }

  filldata(item) {

    this.service.competence.id = item.id;
    this.service.competence.libelle = item.libelle;

  }


  filldataE(item) {

    this.uow.employe.id = item.id;
    this.uow.employe.Prenom = item.Prenom;
    this.uow.employe.Nom = item.Nom;

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

