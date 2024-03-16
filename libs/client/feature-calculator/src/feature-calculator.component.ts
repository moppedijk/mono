import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import {
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

  ngOnInit(): void {
    this.calculate();
  }

  public calculate() {
    // Start with the initial investment
    this.outcome = this.form.initialInvestment;
    this.calculation = [
      {
        year: 0,
        amount: this.form.initialInvestment,
        interest: 0,
      },
    ];

    // Every 12 months add:
    for (let index = 0; index < this.form.years; index++) {
      // Add the annual addition
      this.outcome += this.form.annualAddition;
      // Add the interest rate
      this.outcome += (this.outcome * this.form.interestRate) / 100;

      // Create a new object for the calculation
      // This is not part of the calculation, but is used to display the results
      this.calculation.push({
        year: index + 1,
        amount: this.outcome,
        interest: (this.outcome * this.form.interestRate) / 100,
      });
    }

    // Round to the nearest currency unit
    this.outcome = Math.round(this.outcome);
  }
}
