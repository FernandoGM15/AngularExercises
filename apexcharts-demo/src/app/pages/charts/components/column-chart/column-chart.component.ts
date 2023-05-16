import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexOptions, ChartComponent } from 'ng-apexcharts';
import { ChartOptions } from '../line-chart/line-chart.component';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.scss'],
})
export class ColumnChartComponent {
  @ViewChild('columnChart', { static: true }) columnChart!: ChartComponent;
  chartOptions: ChartOptions = {
    chart: {
      type: 'bar',
      height: 800,
    },
    series: [
      {
        name: 'Series 1',
        data: [30, 40, 45, 50, 49, 60, 70, 91, 125],
      },
      {
        name: 'Series 2',
        data: [20, 10, 35, 30, 39, 50, 60, 81, 105],
      },
      {
        name: 'Series 3',
        data: [10, 20, 30, 25, 34, 45, 55, 71, 85],
      },
    ],
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
      ],
    },
    title: {
      text: 'Column Chart',
    },
  };

  constructor() {
    this.columnChart.chart = this.chartOptions.chart;
    this.columnChart.series = this.chartOptions.series;
    this.columnChart.xaxis = this.chartOptions.xaxis;
    this.columnChart.title = this.chartOptions.title;
  }
}
