import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SessionService } from 'src/app/shared/session.service';
import { EmployeService } from 'src/app/shared/employe.service';
import { PostService } from 'src/app/shared/post.service';
import { EmployePostService } from 'src/app/shared/EmployePost.service';
import * as html2pdf from 'html2pdf.js';

import { from } from 'rxjs';
@Component({
  selector: 'app-demande-attestation',
  templateUrl: './demande-attestation.component.html',
  styleUrls: ['./demande-attestation.component.scss']
})
export class DemandeAttestationComponent implements OnInit {

  @ViewChild('content') content: ElementRef;
  // tslint:disable-next-line:max-line-length
  constructor(public service: SessionService) { }
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
