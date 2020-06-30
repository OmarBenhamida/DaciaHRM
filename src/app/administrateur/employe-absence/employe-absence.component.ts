import { Component, OnInit } from '@angular/core';
import { EmployeService } from 'src/app/shared/employe.service';
import { EmployeAbsenceService } from 'src/app/shared/EmployeAbsence.service';

@Component({
  selector: 'app-employe-absence',
  templateUrl: './employe-absence.component.html',
  styleUrls: ['./employe-absence.component.scss']
})
export class EmployeAbsenceComponent implements OnInit {

  id: number;
  idemploye: number;
  idabsence: number;



  constructor(public service: EmployeAbsenceService, public uow: EmployeService) { }

  ngOnInit(): void {

    this.service.absence = {


      id: 0,
      idemploye: 0,
      idabsence: 0,
    },


      this.service.getall();
    this.uow.getall();



  }

  filldata(item) {

    this.service.absence.id = item.id;
    this.service.absence.idemploye = item.idemploye;
    this.service.absence.idabsence = item.idabsence;
 

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

