import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphComponent } from './graph.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';
import { FiveComponent } from './five/five.component';
import { SixComponent } from './six/six.component';


const routes: Routes = [
  { path: 'graph', redirectTo: '', pathMatch: 'full' },
  {
      path: '', component: GraphComponent,
      // children: [
      //     { path: '', redirectTo: 'menu', pathMatch: 'full' },
      //     { path: 'one', component: OneComponent },
      //     { path: 'two', component: TwoComponent },
      //     { path: 'three', component: ThreeComponent },
      //     { path: 'four', component: FourComponent },
      //     { path: 'five', component: FiveComponent },
      //     { path: 'sexe', component: SixComponent },
      // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphRoutingModule { }
