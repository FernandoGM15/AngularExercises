import { Component } from '@angular/core';
import { ChartOptions } from '../line-chart/line-chart.component';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent {
  chartOptions: ChartOptions = {
    chart: {
      type: 'bar',
      height: 850,
    },
    series: [
      {
        name: 'Series 1',
        data: [44, 55, 41, 67, 22, 43, 21, 49, 72, 52, 51, 32],
      },
      {
        name: 'Series 2',
        data: [13, 23, 20, 8, 13, 27, 33, 22, 17, 19, 30, 31],
      },
      {
        name: 'Series 3',
        data: [11, 17, 15, 15, 21, 14, 15, 17, 20, 12, 19, 22],
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
        'Ago',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    title: {
      text: 'Bar Chart',
    },
  };
}
