import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { EmployeService } from 'src/app/shared/employe.service';
import { GraphService } from 'src/app/shared/graph.service';
@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.scss']
})
export class FourComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{ticks: {
      beginAtZero: true
    }}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [], label: '' },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  constructor(private service: GraphService) { }

  ngOnInit() {

    this.service.getCountSexeParAn().subscribe((r: { sexe: string, count: number, year: number }[]) => {
      console.log(r);
      this.barChartLabels = [...new Set(r.map(e => e.year + ''))];
      const sexes = [...new Set(r.map(e => e.sexe))];
      this.barChartData = [];
      sexes.forEach(e => {
        this.barChartData.push({ label: e, data: [] })
      });

      r.forEach(e => {
        this.barChartData.forEach(b => {

          if (b.label === e.sexe) {
            b.data.push(e.count);
          }
        });
      });

      console.log(this.barChartData);

    });
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }


}
