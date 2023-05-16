import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [ChartsComponent, LineChartComponent],
  imports: [CommonModule, ChartsRoutingModule, NgApexchartsModule],
})
export class ChartsModule {}
