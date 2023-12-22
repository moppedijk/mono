import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiCommonModule } from '@mo/ui-common';
import { ContainerConfig, UiLayoutModule } from '@mo/ui-layout';
import { shuffle } from '@mo/util-core';

@Component({
  standalone: true,
  imports: [RouterModule, UiLayoutModule, UiCommonModule, NgFor],
  selector: 'mo-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public config: ContainerConfig = {
    title: 'Moppedijk - Landing',
    creator: '@mo',
    logoUrl: 'assets/logos/logo.svg',
    organization: 'Moppedijk',
    project: 'Mono'
  }

  private realInterests: string [] = [
    'Javascript',
    'HTML',
    'CSS',
    'Crypto',
    'Nodejs',
    'Angular',
    'Typescript',
    'Visual Design',
    'RXJS',
    'Scrum',
    'Unit testing',
    'Web 3.0',
    'Visual Design',
    'UX Design',
    'SOLID',
    'DRY',
    'DevOps'
  ];

  public interests = shuffle(this.realInterests);
}
