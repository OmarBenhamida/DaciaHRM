import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeComponent } from './employe/employe.component';
import { MenuComponent } from './menu/menu.component';
import { AdministrateurComponent } from './administrateur.component';
import { AdministrateurRoutingModule } from './administrateur-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrdreMisionComponent } from './ordre-mision/ordre-mision.component';
import { DiplomeComponent } from './diplome/diplome.component';
import { CongeComponent } from './conge/conge.component';
import { ContratComponent } from './contrat/contrat.component';
import { AbsenceComponent } from './absence/absence.component';
import { RetardComponent } from './retard/retard.component';
import { PostComponent } from './post/post.component';
import { FeuilPaieComponent } from './feuil-paie/feuil-paie.component';
import { CompetenceComponent } from './competence/competence.component';
import { IndemniteComponent } from './indemnite/indemnite.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DemandeAttestationComponent } from './demande-attestation/demande-attestation.component';
import { FormationComponent } from './formation/formation.component';
import { EmployeContratComponent } from './employe-contrat/employe-contrat.component';
import { EmployeCongeComponent } from './employe-conge/employe-conge.component';
import { EmployeAbsenceComponent } from './employe-absence/employe-absence.component';
import { EmployeRetardComponent } from './employe-retard/employe-retard.component';
import { EmployeFormationComponent } from './employe-formation/employe-formation.component';
import { EmployePostComponent } from './employe-post/employe-post.component';
import { EmployeCompetenceComponent } from './employe-competence/employe-competence.component';
import { DemandeCongeComponent } from './demande-conge/demande-conge.component';
import { EtatOmComponent } from './etat-om/etat-om.component';
import { EtatFpComponent } from './etat-fp/etat-fp.component';
import { EmployeIndimnteComponent } from './employe-indimnte/employe-indimnte.component';
import { EtatCongeComponent } from './etat-conge/etat-conge.component';
import { DetailsOmComponent } from './details-om/details-om.component';
import { DetailsCongeComponent } from './details-conge/details-conge.component';
import { DetailsEmpComponent } from './details-emp/details-emp.component';



@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [EmployeComponent, MenuComponent, AdministrateurComponent, OrdreMisionComponent, DiplomeComponent, CongeComponent, ContratComponent, AbsenceComponent, RetardComponent, PostComponent, FeuilPaieComponent, CompetenceComponent, IndemniteComponent, DemandeAttestationComponent, FormationComponent, EmployeContratComponent, EmployeCongeComponent, EmployeAbsenceComponent, EmployeRetardComponent, EmployeFormationComponent, EmployePostComponent, EmployeCompetenceComponent, DemandeCongeComponent, EtatOmComponent, EtatFpComponent, EmployeIndimnteComponent, EtatCongeComponent, DetailsOmComponent, DetailsCongeComponent, DetailsEmpComponent],
  imports: [
    CommonModule,
    AdministrateurRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),

    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdministrateurModule { }
