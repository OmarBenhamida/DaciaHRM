import { Component, OnInit } from '@angular/core';
import { OrdreMissionService } from 'src/app/shared/ordreMission.service';
import { OrdreMission } from 'src/app/models/OrdreMission.models';

@Component({
  selector: 'app-details-om',
  templateUrl: './details-om.component.html',
  styleUrls: ['./details-om.component.scss']
})
export class DetailsOmComponent implements OnInit {
  o: OrdreMission = this.service.om;

  constructor(private service: OrdreMissionService) { }

  ngOnInit(): void {
  }

}
