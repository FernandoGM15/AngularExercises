import { Component, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { ChartOptions } from '../line-chart/line-chart.component';
import { GenerationsService } from 'src/app/shared/services/generations.service';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss'],
})
export class AreaChartComponent {
  @ViewChild('chart') chart!: ChartComponent;

  chartOptions: ChartOptions = {
    series: [
      {
        data: [],
      },
    ],  
    chart: {
      type: 'area',
      height: 800,
      animations: {
        enabled: true,
        easing: 'easein',
        speed: 1500,
      },
    },
    title: {
      text: 'Area chart',
    },
    xaxis: {
      type: 'category',
    },
  };

  constructor(private generationService: GenerationsService) {
    this.generationService
      .getPokemonCountByGeneration()
      .subscribe((generations) => {
        this.chartOptions.series[0].data = generations;
      });
  }
}
