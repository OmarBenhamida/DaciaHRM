import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../shared/login.service';
import { SessionService } from '../shared/session.service';
import { Router } from '@angular/router';
import { Employe } from '../models/Employes.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
