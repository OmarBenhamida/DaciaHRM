import { Component, OnInit } from '@angular/core';
import * as html2pdf from 'html2pdf.js';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { CongeService } from 'src/app/shared/conge.service';
import { Conge } from 'src/app/models/Conges.models';

@Component({
  selector: 'app-etat-conge',
  templateUrl: './etat-conge.component.html',
  styleUrls: ['./etat-conge.component.scss']
})
export class EtatCongeComponent implements OnInit {
  o: Conge = this.service.conge;
  id = 0;

  dt = new Date();

  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private service: CongeService) { }

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
