import { UtilisateurComponent } from './utilisateur.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DemandeAttestationComponent } from './demande-attestation/demande-attestation.component';
import { ConslutationSoldeComponent } from './conslutation-solde/conslutation-solde.component';
import { DemandeFeuilpaieComponent } from './demande-feuilpaie/demande-feuilpaie.component';
import { DemandeCongeComponent } from './demande-conge/demande-conge.component';
import { CongeComponent } from './conge/conge.component';
import { EtatFpComponent } from './etat-fp/etat-fp.component';
import { FeuilPaieComponent } from './feuil-paie/feuil-paie.component';

const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    {
        path: '', component: UtilisateurComponent,
        children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component: MenuComponent },
            { path: 'attestationTp', component: DemandeAttestationComponent },
            { path: 'soldeconge', component: ConslutationSoldeComponent },
            { path: 'demandeconge', component: CongeComponent },
            { path: 'fichepaie', component: FeuilPaieComponent },
            { path: 'etatfp', component: EtatFpComponent },




        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UtilisateurRoutingModule { }
