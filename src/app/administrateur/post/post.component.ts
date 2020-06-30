import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/post.service';
import { EmployeService } from 'src/app/shared/employe.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  id: number;
  libelle: string;
  salaireHoraire: number;

  //employes = this.uow.getall();
  employe = this.uow.get(this.id);

  constructor(public service: PostService, public uow: EmployeService) { }

  ngOnInit(): void {

    this.service.poste = {

      id: 0,
      libelle: null,
      salaireHoraire: null,

    },



      this.service.getall();
    this.uow.getall();


  }

  filldata(item) {

    this.service.poste = item;

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

