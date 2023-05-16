
import { Component, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexTitleSubtitle, ApexXAxis, ChartComponent } from 'ng-apexcharts';
import { tap } from 'rxjs';
import { GenerationsService } from 'src/app/shared/services/generations.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent {

  @ViewChild("chart") chart!: ChartComponent;

  public chartOptions: ChartOptions = {
    series: [{
      data: []
    }],
    chart: {
      height: 350,
      type: "line",
      animations: {
        enabled: true,
        easing: 'linear',
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350
        }
      }
    },
    title: {
      text: "My First Angular Chart"
    },
    xaxis: {
      type: "category"
    }
  };

  constructor(
    private generationService: GenerationsService
  ) {
    this.getData()
  }

  getData() {
    this.generationService.getPokemonCountByGeneration()
      .subscribe({
        next: (resp) => {
          console.log(resp);
          
          this.chartOptions.series = [
            { data: resp }
          ]
        }
      })
  }
}
