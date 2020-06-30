import { Component, OnInit } from '@angular/core';
import { CongeService } from 'src/app/shared/conge.service';
import { Conge } from 'src/app/models/Conges.models';

@Component({
  selector: 'app-details-conge',
  templateUrl: './details-conge.component.html',
  styleUrls: ['./details-conge.component.scss']
})
export class DetailsCongeComponent implements OnInit {

  o: Conge = this.service.conge;

  constructor(private service: CongeService) { }

  ngOnInit(): void {
  }

}
