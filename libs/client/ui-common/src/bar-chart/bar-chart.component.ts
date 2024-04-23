import { Component, Input, OnChanges, ViewChild } from '@angular/core';
import { ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { barChartOptions } from './bar-chart.options';

@Component({
  selector: 'mo-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
  standalone: true,
  imports: [BaseChartDirective],
})
export class BarChartComponent implements OnChanges {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective<'bar'> | undefined;

  public chartOptions = barChartOptions;
  public chartType = 'bar' as const;

  @Input()
  public chartData: ChartData<'bar'> = {
    labels: [0],
    datasets: [],
  };

  ngOnChanges() {
    this.chart?.update();
  }
}
