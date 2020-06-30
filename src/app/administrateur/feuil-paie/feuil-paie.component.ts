import { Component, OnInit } from '@angular/core';
import { EmployeService } from 'src/app/shared/employe.service';
import { Employe } from 'src/app/models/Employes.models';
import { EmployePost } from 'src/app/models/EmployePosts.models';
import { FichePaieService } from 'src/app/shared/fichepaie.service';
import { Post } from 'src/app/models/Posts.models';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-feuil-paie',
  templateUrl: './feuil-paie.component.html',
  styleUrls: ['./feuil-paie.component.scss']
})
export class FeuilPaieComponent implements OnInit {

  o = {
    mois: 0,
    annee: 0,
    idemploye: 0,
    employe: Employe,
    post: Post,
    abs: 0,
    rts: 0,
  }
  y = new Date().getFullYear()
  years = [...Array(5).keys()].map((e, i) => this.y - i);
  months = [...Array(12).keys()].map((e, i) => i + 1);

  constructor(public uow: EmployeService, public fp: FichePaieService, private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.uow.getall();


  }
  tester() {


  }
  async submit() {

    const ep = await this.fp.get(this.o.idemploye).toPromise();
    const ab = await this.fp.countAbsByUser(this.o.mois, this.o.idemploye).toPromise();
    const rt = await this.fp.sumAbsByUser(this.o.mois, this.o.idemploye).toPromise();

    this.o.employe = ep.employe as any;
    this.o.post = ep.post as any;
    this.o.rts = rt;
    this.o.abs = ab;
    this.router.navigate(['/administrateur/etatfp']);
    // console.log(ep, ab, rt)
    console.log(this.o);

    this.fp.o = this.o;
  }

}
