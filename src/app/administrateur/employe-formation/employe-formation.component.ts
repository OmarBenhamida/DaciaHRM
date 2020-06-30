import { Component, OnInit } from '@angular/core';
import { EmployeFormationService } from 'src/app/shared/employeFormation.service';
import { EmployeService } from 'src/app/shared/employe.service';
import { FormationService } from 'src/app/shared/formation.service';

@Component({
  selector: 'app-employe-formation',
  templateUrl: './employe-formation.component.html',
  styleUrls: ['./employe-formation.component.scss']
})
export class EmployeFormationComponent implements OnInit {

  id: number;
  idemploye: number;
  idformation: number;



  constructor(public service: EmployeFormationService, public uow: EmployeService, public com: FormationService) { }

  ngOnInit(): void {

    this.service.employesformation = {


      id: 0,
      idemploye: 0,
      idformation: 0,
      employe: null,
      formation: null,
    },


      this.service.getall();
    this.uow.getall();
    this.com.getall();



  }

  filldata(item) {

    this.service.employesformation.id = item.id;
    this.service.employesformation.idemploye = item.idemploye;
    this.service.employesformation.idformation = item.idformation;


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

