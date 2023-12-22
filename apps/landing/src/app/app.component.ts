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
    'DevOps',
    'Frontend',
    'StencilJS',
    'ng-mocks',
    'Jira',
    'Gitlab',
    'Github',
    '11ty',
    'Storybook',
    '<web-components />',
    'Git',
    'NX',
    'Monorepo',
    'CI/CD',
    'git rebase --contine',
    'Visual Studio Code',
    'SCSS',
    'Trunkbased',
    'Fontawesome',
    'Actionscript 3',
    'Flash',
  ];

  public config: ContainerConfig = {
    title: 'Moppedijk - Landing',
    creator: '@mo',
    logoUrl: 'assets/logos/logo.svg',
    profileImage: 'assets/profile/1000x1000.jpg',
    organization: 'Moppedijk',
    project: 'Mono'
  }

  public interests = shuffle(this.realInterests);
}
