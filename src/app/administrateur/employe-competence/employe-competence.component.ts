import { Component, OnInit } from '@angular/core';
import { EmployeService } from 'src/app/shared/employe.service';
import { EmployeCompetanceService } from 'src/app/shared/employeCompetence.service';
import { CompetenceService } from 'src/app/shared/competence.service';

@Component({
  selector: 'app-employe-competence',
  templateUrl: './employe-competence.component.html',
  styleUrls: ['./employe-competence.component.scss']
})
export class EmployeCompetenceComponent implements OnInit {

  id: number;
  idemploye: number;
  idcompetence: number;



  constructor(public service: EmployeCompetanceService, public uow: EmployeService, public com: CompetenceService) { }

  ngOnInit(): void {

    this.service.employescompetence = {


      id: 0,
      idemploye: 0,
      idcompetence: 0,
      employe: null,
      competence: null,
    },


      this.service.getall();
    this.uow.getall();



  }

  filldata(item) {

    this.service.employescompetence.id = item.id;
    this.service.employescompetence.idemploye = item.idemploye;
    this.service.employescompetence.idcompetence = item.idcompetence;


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

