import { Component, OnInit } from '@angular/core';
import { RetardService } from 'src/app/shared/retard.service';
import { EmployeService } from 'src/app/shared/employe.service';
import { Retard } from 'src/app/models/Retards.models';

@Component({
  selector: 'app-retard',
  templateUrl: './retard.component.html',
  styleUrls: ['./retard.component.scss']
})
export class RetardComponent implements OnInit {

  id: number;
  dateRetard: Date;
  type: boolean;
  // tslint:disable-next-line:variable-name
  nb_heure: number;
  justification: string;
  idemploye: number;
  t: Retard[] = [];


  employe = this.uow.get(this.id);

  constructor(public service: RetardService, public uow: EmployeService) { }

  ngOnInit(): void {

    this.service.retard = {

      id: 0,
      dateRetard: null,
      type: null,
      nb_heure: null,
      justification: null,
      idemploye: null,
      employe : null
    },



      this.getall();
    this.uow.getall();


  }

  getall() {

    this.service.getall().subscribe(r => {
      this.service.retards = r as any;
      this.t = r as any;
      console.log(r);
    });
  }

  restaurertable(){
    this.getall();
  }

  filldata(item) {

    this.service.retard = item;


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
      console.log(res);
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

  selectionChange() {
    // this.t = this.service.conges;
    // this.service.conges = [];
    this.t = this.service.retards.filter(e => +e.idemploye === +this.service.retard.idemploye);

  }
  RechercheParDate() {

    if (this.service.retard.dateRetard === null) {

      this.t = this.service.retards;

    } else {
      this.t = this.service.retards.filter(e => e.dateRetard === this.service.retard.dateRetard);

    }
  }



}

