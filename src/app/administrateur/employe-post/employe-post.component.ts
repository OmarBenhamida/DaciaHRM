import { Component, OnInit } from '@angular/core';
import { EmployePostService } from 'src/app/shared/EmployePost.service';
import { EmployeService } from 'src/app/shared/employe.service';
import { PostService } from 'src/app/shared/post.service';

@Component({
  selector: 'app-employe-post',
  templateUrl: './employe-post.component.html',
  styleUrls: ['./employe-post.component.scss']
})
export class EmployePostComponent implements OnInit {

  id: number;
  idemploye: number;
  idpost: number;



  constructor(public service: EmployePostService, public uow: EmployeService, public wou: PostService) { }

  ngOnInit(): void {

    this.service.employespost = {


      id: 0,
      idemploye: 0,
      idpost: 0,
      datedebut: null,
      dateFin: null,
      employe: null,
      post: null,
    },


      this.service.getall();
    this.uow.getall();
    this.wou.getall();




  }

  filldata(item) {

    this.service.employespost.id = item.id;
    this.service.employespost.idemploye = item.idemploye;
    this.service.employespost.idpost = item.idpost;


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

