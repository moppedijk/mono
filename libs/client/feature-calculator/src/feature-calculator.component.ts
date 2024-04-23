import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData } from 'chart.js';
import {
  BarChartComponent,
  ColComponent,
  ContainerComponent,
  InputComponent,
  InputNumberComponent,
  IntrodctionComponent,
  PageComponent,
  RowComponent,
  SectionComponent,
} from '@mo/client/ui-common';
import {
  APP_LOGO_URL_TOKEN,
  APP_ORGANIZATION_NAME_TOKEN,
  APP_PROFILE_IMAGE_TOKEN,
  APP_PROJECT_LINK_TOKEN,
  APP_PROJECT_NAME_TOKEN,
} from '@mo/client/util-core';

interface ChartDateSetInterface {
  data: number[];
  label: string;
}

@Component({
  selector: 'mo-feature-calculator',
  standalone: true,
  imports: [
    CommonModule,
    PageComponent,
    ContainerComponent,
    SectionComponent,
    RowComponent,
    ColComponent,
    IntrodctionComponent,
    InputComponent,
    InputNumberComponent,
    DecimalPipe,
    BaseChartDirective,
    BarChartComponent,
  ],
  templateUrl: './feature-calculator.component.html',
})
export class FeatureCalculatorComponent implements OnInit {
  public logoUrl = inject(APP_LOGO_URL_TOKEN);
  public profileImage = inject(APP_PROFILE_IMAGE_TOKEN);
  public organizationName = inject(APP_ORGANIZATION_NAME_TOKEN);
  public projectName = inject(APP_PROJECT_NAME_TOKEN);
  public projectLink = inject(APP_PROJECT_LINK_TOKEN);

  public isLoading = false;

  public form = {
    initialInvestment: 1000,
    annualAddition: 1200,
    interestRate: 7,
    years: 20,
  };

  public outcome = 0;
  public calculation: {
    year: number;
    amount: number;
    interest: number;
  }[] = [];

  public chartData: ChartData<'bar'> = {
    labels: [0],
    datasets: [],
  };

  private setInitialOutcome() {
    this.outcome = this.form.initialInvestment;
  }

  private setInitialCalculation() {
    this.calculation = [
      {
        year: 0,
        amount: this.form.initialInvestment,
        interest: 0,
      },
    ];
  }

  private updateChart(
    chartDataLabels: number[],
    chartDataSet: ChartDateSetInterface,
  ): void {
    this.chartData.labels = chartDataLabels;
    this.chartData.datasets = [];
    this.chartData.datasets?.push(chartDataSet);
  }

  public ngOnInit(): void {
    this.calculate();
  }

  public calculate() {
    const chartDataSet = { data: [0], label: 'Years' };
    const chartDataLabels: number[] = [];

    // Start with the initial outcome and calculation
    this.setInitialOutcome();
    this.setInitialCalculation();

    // Every 12 months add:
    for (let year = 0; year < this.form.years; year++) {
      const interest = (this.outcome * this.form.interestRate) / 100;
      // Add the annual addition
      this.outcome += this.form.annualAddition;
      // Add the interest rate
      this.outcome += interest;

      // Create a new object for the calculation
      // This is not part of the calculation, but is used to display the results
      this.calculation.push({
        year: year + 1,
        amount: this.outcome,
        interest,
      });

      chartDataLabels.push(year + 1);
      chartDataSet.data?.push(this.outcome);
    }

    // Round to the nearest currency unit
    this.outcome = Math.round(this.outcome);

    // Update the chart data
    this.updateChart(chartDataLabels, chartDataSet);
  }
}
