import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { GraphRoutingModule } from './graph-routing.module';
import { GraphComponent } from './graph.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';
import { FiveComponent } from './five/five.component';
import { SixComponent } from './six/six.component';
import { SevenComponent } from './seven/seven.component';


@NgModule({
  declarations: [GraphComponent, OneComponent, TwoComponent, ThreeComponent, FourComponent, FiveComponent, SixComponent, SevenComponent],
  imports: [
    CommonModule,
    GraphRoutingModule,
    ChartsModule
  ]
})
export class GraphModule { }
