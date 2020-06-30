import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { FichePaieService } from 'src/app/shared/fichepaie.service';
import { Post } from 'src/app/models/Posts.models';
import { Employe } from 'src/app/models/Employes.models';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-etat-fp',
  templateUrl: './etat-fp.component.html',
  styleUrls: ['./etat-fp.component.scss']
})
export class EtatFpComponent implements OnInit {
  o = {
    mois: 0,
    annee: 0,
    idemploye: 0,
    employe: null,
    post: null,
    abs: 0,
    rts: 0,
  }

  constructor(private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              public service: FichePaieService) {
                this.o = service.o;
               }

  ngOnInit(): void {
  }

  public pdfDownload() {

    const options = {

      filename: 'attestation.pdf',
      image: { type: 'png' },
      html2canvas: {},
      jdPDf : {orientation : 'landscape'}

    };
    const content: Element = document.getElementById('printer');

    html2pdf().from(content).set(options).save();


  }

}
