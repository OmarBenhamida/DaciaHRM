import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { OrdreMission } from 'src/app/models/OrdreMission.models';
import { OrdreMissionService } from 'src/app/shared/ordreMission.service';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-etat-om',
  templateUrl: './etat-om.component.html',
  styleUrls: ['./etat-om.component.scss']
})
export class EtatOmComponent implements OnInit {
  o: OrdreMission = this.service.om;
  id = 0;
  dt = new Date();
  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private service: OrdreMissionService) { }

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
