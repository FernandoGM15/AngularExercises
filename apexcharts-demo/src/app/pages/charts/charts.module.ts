import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';
//Components
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { AreaChartComponent } from './components/area-chart/area-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';

@NgModule({
  declarations: [ChartsComponent, LineChartComponent, AreaChartComponent, BarChartComponent],
  imports: [CommonModule, ChartsRoutingModule, NgApexchartsModule],
})
export class ChartsModule {}
