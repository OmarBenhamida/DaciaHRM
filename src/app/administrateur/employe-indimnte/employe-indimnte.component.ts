import { Component, OnInit } from '@angular/core';
import { EmployeIndimniteService } from 'src/app/shared/EmployeIndimnite.service';
import { EmployeService } from 'src/app/shared/employe.service';
import { IndimniteService } from 'src/app/shared/indimnite.service';
import { EmployeIndimnite } from 'src/app/models/EmployeIndimnites.models';

@Component({
  selector: 'app-employe-indimnte',
  templateUrl: './employe-indimnte.component.html',
  styleUrls: ['./employe-indimnte.component.scss']
})
export class EmployeIndimnteComponent implements OnInit {

  id: number;
  idemploye: number;
  idindimnite: number;
  t: EmployeIndimnite[] = [];


  constructor(public service: EmployeIndimniteService, public uow: EmployeService, public com: IndimniteService) { }

  ngOnInit(): void {

    this.service.employesindimnite = {


      id: 0,
      idemploye: 0,
      idindimnite: 0,
      employe: null,
      indimnite: null,
    },


      this.getall();
    this.uow.getall();
    this.com.getall();



  }

  getall() {

    this.service.getall().subscribe(r => {
      this.service.employesindimnites = r as any;
      this.t = r as any
      console.log(r);
    });
  }

  Filtrer(){
    this.t = this.service.employesindimnites.filter(e => +e.idemploye === +this.service.employesindimnite.idemploye);


  }

  filldata(item) {

    this.service.employesindimnite = item;


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

