import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdministrateurComponent } from './administrateur.component';
import { MenuComponent } from './menu/menu.component';
import { EmployeComponent } from './employe/employe.component';
import { CongeComponent } from './conge/conge.component';
import { DiplomeComponent } from './diplome/diplome.component';
import { CompetenceComponent } from './competence/competence.component';
import { IndemniteComponent } from './indemnite/indemnite.component';
import { OrdreMisionComponent } from './ordre-mision/ordre-mision.component';
import { FeuilPaieComponent } from './feuil-paie/feuil-paie.component';
import { PostComponent } from './post/post.component';
import { AbsenceComponent } from './absence/absence.component';
import { RetardComponent } from './retard/retard.component';
import { ContratComponent } from './contrat/contrat.component';
import { DemandeAttestationComponent } from './demande-attestation/demande-attestation.component';
import { FormationComponent } from './formation/formation.component';
import { DemandeCongeComponent } from './demande-conge/demande-conge.component';
import { EtatOmComponent } from './etat-om/etat-om.component';
import { EtatFpComponent } from './etat-fp/etat-fp.component';
import { EtatCongeComponent } from './etat-conge/etat-conge.component';
import { DetailsOmComponent } from './details-om/details-om.component';
import { DetailsCongeComponent } from './details-conge/details-conge.component';
import { DetailsEmpComponent } from './details-emp/details-emp.component';


const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    {
        path: '', component: AdministrateurComponent,
        children: [
            { path: '', redirectTo: 'graph', pathMatch: 'full' },
            { path: 'menu', component: MenuComponent },
            { path: 'employe', component: EmployeComponent },
            { path: 'conge', component: CongeComponent },
            { path: 'om', component: OrdreMisionComponent },
            { path: 'formation', component: FormationComponent },
            { path: 'diplomes', component: DiplomeComponent },
            { path: 'competence', component: CompetenceComponent },
            { path: 'indimnite', component: IndemniteComponent },
            { path: 'fichepaie', component: FeuilPaieComponent },
            { path: 'post', component: PostComponent },
            { path: 'absence', component: AbsenceComponent },
            { path: 'reatrd', component: RetardComponent },
            { path: 'contrat', component: ContratComponent },
            { path: 'adminattest', component: DemandeAttestationComponent },
            { path: 'demandeconge', component: DemandeCongeComponent },
            { path: 'etatom/:id', component: EtatOmComponent },
            { path: 'etatfp', component: EtatFpComponent },
            { path: 'etatconge', component: EtatCongeComponent },
            { path: 'graph', loadChildren: () => import('./graph/graph.module').then(m => m.GraphModule)},
            { path: 'detailsom', component: DetailsOmComponent },
            { path: 'detailsconge', component: DetailsCongeComponent },
            { path: 'detailsemp', component: DetailsEmpComponent },



        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdministrateurRoutingModule { }
