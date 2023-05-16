import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexXAxis,
  ChartComponent,
} from 'ng-apexcharts';
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
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent {
  @ViewChild('chart') chart!: ChartComponent;

  public chartOptions: ChartOptions = {
    // Chart Data
    series: [
      {
        data: [],
      },
    ],
    // Chart Configuration
    chart: {
      height: 800,
      type: 'line',
      animations: {
        enabled: true,
        easing: 'linear',
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
    },
    // Chart Title
    title: {
      text: 'My First Angular Chart',
    },
    // Data type on x axis
    xaxis: {
      type: 'category',
    },
  };

  constructor(private generationService: GenerationsService) {
    this.getData();
  }

  getData() {
    this.generationService.getPokemonCountByGeneration().subscribe({
      next: (resp) => {
        this.chartOptions.series = [{ data: resp, name: 'Pokemon Count' }];
      },
    });
  }
}
