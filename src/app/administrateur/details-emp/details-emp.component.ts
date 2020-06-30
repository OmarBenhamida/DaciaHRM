import { Component, OnInit } from '@angular/core';
import { Employe } from 'src/app/models/Employes.models';
import { EmployeService } from 'src/app/shared/employe.service';

@Component({
  selector: 'app-details-emp',
  templateUrl: './details-emp.component.html',
  styleUrls: ['./details-emp.component.scss']
})
export class DetailsEmpComponent implements OnInit {

  o: Employe = this.service.employe;

  constructor(private service: EmployeService) { }
  ngOnInit(): void {
  }

}
