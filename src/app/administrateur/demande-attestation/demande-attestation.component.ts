import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SessionService } from 'src/app/shared/session.service';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-demande-attestation',
  templateUrl: './demande-attestation.component.html',
  styleUrls: ['./demande-attestation.component.scss'],
})
export class DemandeAttestationComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  today = new Date();
  constructor(public service: SessionService) {



   }

  @ViewChild('content') content: ElementRef;

  ngOnInit(): void {

  }
  // tslint:disable-next-line:adjacent-overload-signatures

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
