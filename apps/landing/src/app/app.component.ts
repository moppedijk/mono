import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiCommonModule } from '@mo/ui-common';
import { Tag, UiLandingModule } from '@mo/ui-landing';
import { ContainerConfig, UiLayoutModule } from '@mo/ui-layout';

@Component({
  standalone: true,
  imports: [RouterModule, UiLayoutModule, UiCommonModule, NgFor, UiLandingModule],
  selector: 'mo-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  public interests: Tag[] = [
    { name: 'Javascript', priority: 1 },
    { name: 'HTML', priority: 1 },
    { name: 'CSS', priority: 1 },
    { name: 'Nodejs', priority: 1 },
    { name: 'Angular', priority: 1 },
    { name: 'Typescript', priority: 1 },
    { name: 'RXJS', priority: 1 },
    { name: 'Unit testing', priority: 1 },
    { name: 'Visual Design', priority: 1 },
    { name: 'UX Design', priority: 1 },
    { name: 'DevOps', priority: 1 },
    { name: 'Storybook', priority: 1 },
    { name: 'NX', priority: 1 },
    { name: 'Visual Studio Code', priority: 1 },
    { name: 'SCSS', priority: 1 },
    { name: 'Visual Design', priority: 2 },
    { name: 'Crypto', priority: 2 },
    { name: 'Scrum', priority: 2 },
    { name: 'Web 3.0', priority: 2 },
    { name: 'SOLID', priority: 2 },
    { name: 'DRY', priority: 2 },
    { name: 'Frontend', priority: 2 },
    { name: 'StencilJS', priority: 2 },
    { name: 'ng-mocks', priority: 2 },
    { name: 'Jira', priority: 2 },
    { name: 'Gitlab', priority: 2 },
    { name: 'Github', priority: 2 },
    { name: '11ty', priority: 2 },
    { name: '<web-components />', priority: 2 },
    { name: 'Git', priority: 2 },
    { name: 'Monorepo', priority: 2 },
    { name: 'CI/CD', priority: 2 },
    { name: 'git rebase --contine', priority: 2 },
    { name: 'Trunkbased', priority: 2 },
    { name: 'Fontawesome', priority: 2 },
    { name: 'Actionscript 3', priority: 2 },
    { name: 'Flash', priority: 2 },
  ];

  public config: ContainerConfig = {
    title: 'Moppedijk - Landing',
    creator: '@mo',
    logoUrl: 'assets/logos/logo.svg',
    profileImage: 'assets/profile/1000x1000.webp',
    organization: 'Moppedijk',
    project: 'Mono',
    projectLink: 'https://github.com/moppedijk/mono',
  }
}
