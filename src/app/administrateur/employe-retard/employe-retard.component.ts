import { Component, OnInit } from '@angular/core';
import { EmployeService } from 'src/app/shared/employe.service';
import { EmployeRetardService } from 'src/app/shared/EmployeRetard.service';

@Component({
  selector: 'app-employe-retard',
  templateUrl: './employe-retard.component.html',
  styleUrls: ['./employe-retard.component.scss']
})
export class EmployeRetardComponent implements OnInit {

  id: number;
  idemploye: number;
  idretard: number;



  constructor(public service: EmployeRetardService, public uow: EmployeService) { }

  ngOnInit(): void {

    this.service.retard = {


      id: 0,
      idemploye: 0,
      idretard: 0,
    },


      this.service.getall();
    this.uow.getall();



  }

  filldata(item) {

    this.service.retard.id = item.id;
    this.service.retard.idemploye = item.idemploye;
    this.service.retard.idretard = item.idretard;
 

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

