import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilisateurComponent } from './utilisateur.component';
import { DemandeAttestationComponent } from './demande-attestation/demande-attestation.component';
import { DemandeCongeComponent } from './demande-conge/demande-conge.component';
import { ConslutationSoldeComponent } from './conslutation-solde/conslutation-solde.component';
import { DemandeFeuilpaieComponent } from './demande-feuilpaie/demande-feuilpaie.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { UtilisateurRoutingModule } from './utilisateur-routing.module';
import { CongeComponent } from './conge/conge.component';
import { EtatFpComponent } from './etat-fp/etat-fp.component';
import { FeuilPaieComponent } from './feuil-paie/feuil-paie.component';



@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [UtilisateurComponent,FeuilPaieComponent, CongeComponent, DemandeAttestationComponent,EtatFpComponent, DemandeCongeComponent, ConslutationSoldeComponent, DemandeFeuilpaieComponent, MenuComponent],
  imports: [
    CommonModule,
    UtilisateurRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UtilisateurModule { }
