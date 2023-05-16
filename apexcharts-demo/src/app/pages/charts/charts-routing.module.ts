import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { AreaChartComponent } from './components/area-chart/area-chart.component';
import { ChartsComponent } from './charts.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';

const routes: Routes = [
  {
    path: '',
    component: ChartsComponent,
  },
  {
    path: 'line',
    component: LineChartComponent,
  },
  {
    path: 'area',
    component: AreaChartComponent,
  },
  {
    path: 'bar',
    component: BarChartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsRoutingModule {}
