import { Component, OnInit } from '@angular/core';
import { OrdreMissionService } from 'src/app/shared/ordreMission.service';
import { EmployeService } from 'src/app/shared/employe.service';
import { OrdreMission } from 'src/app/models/OrdreMission.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordre-mision',
  templateUrl: './ordre-mision.component.html',
  styleUrls: ['./ordre-mision.component.scss']
})
export class OrdreMisionComponent implements OnInit {

  id: number;
  Libelle: string;
  lieu: string;
  datedebut: Date;
  datefin: Date;
  idemploye: number;
  t = [];
  dt = new Date();

  constructor(public service: OrdreMissionService, public uow: EmployeService, private router: Router) { }

  ngOnInit(): void {

    this.service.om = {


      id: 0,
      Libelle: null,
      lieu: null,
      datedebut: null,
      datefin: null,
      idemploye: null,
      employe: null

    },

      this.getall();
    this.uow.getall();

    console.log(this.dt);

  }



  filldata(item) {

    // this.service.om.id = item.id;
    // this.service.om.Libelle = item.Libelle;
    // this.service.om.lieu = item.lieu;
    // this.service.om.datedebut = item.datedebut;
    // this.service.om.datefin = item.datefin;
    // this.service.om.idemploye = item.idemploye;
    // this.service.om.employe
    this.service.om = item;


  }
  filldata2(item) {

    // this.service.om.id = item.id;
    // this.service.om.Libelle = item.Libelle;
    // this.service.om.lieu = item.lieu;
    // this.service.om.datedebut = item.datedebut;
    // this.service.om.datefin = item.datefin;
    // this.service.om.idemploye = item.idemploye;
    // this.service.om.employe
    this.service.om = item;
    this.router.navigate(['/administrateur/detailsom']);


  }

  disablebtm() {
    // console.log(new Date(this.service.om.datedebut));
    const dateselected = new Date(this.service.om.datedebut);
    const today = new Date();
    if (dateselected.getFullYear() <= today.getFullYear()
      && dateselected.getDate() <= today.getDate()
      && dateselected.getMonth() <= today.getMonth()) {

        return true;

    }
    return false;
  }

  filldataE(item) {

    this.uow.employe.id = item.id;
    this.uow.employe.Prenom = item.Prenom;
    this.uow.employe.Nom = item.Nom;

  }

  selectionChange() {
    // this.t = this.service.oms;
    // this.service.oms = [];
    if (+this.service.om.idemploye === 0) {

      this.t = this.service.oms;

    } else {
      this.t = this.service.oms.filter(e => +e.idemploye === +this.service.om.idemploye);

    }


  }

  getall() {

    this.service.getall().subscribe(
      res => {
        this.service.oms = res as OrdreMission[];
        this.t = res as any
        console.log(res);
      }
    );

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
  RecharcheDateDebut() {

    if (this.service.om.datedebut === null) {

      this.t = this.service.oms;

    } else {
      this.t = this.service.oms.filter(e => e.datedebut === this.service.om.datedebut);

    }
  }

  RecharcheDateFin() {

    if (this.service.om.datefin === null) {

      this.t = this.service.oms;

    } else {
      this.t = this.service.oms.filter(e => e.datefin === this.service.om.datefin);

    }
  }

  restaurertable() {
    this.getall();
  }

  imprimer() {

    this.router.navigate(['/administrateur/etatom', +this.service.om.id]);


  }



}

