import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeatureContactComponent } from '@mo/client/feature-contact';
import {
  ButtonAnkerComponent,
  ButtonComponent,
  ColComponent,
  ContainerComponent,
  ContainerConfig,
  IntrodctionComponent,
  RowComponent,
  SectionComponent,
  Tag,
  TagSearchComponent,
} from '@mo/client/ui-common';
import { FeatureToggleService } from '@mo/client/util-core';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    NgFor,
    FeatureContactComponent,
    AsyncPipe,
    NgIf,
    ButtonComponent,
    ButtonAnkerComponent,
    ColComponent,
    RowComponent,
    IntrodctionComponent,
    TagSearchComponent,
    SectionComponent,
    ContainerComponent
  ],
  selector: 'mo-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private featureToggleService = inject(FeatureToggleService);

  public enabledFeature$ = this.featureToggleService.enabledFeature$;

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
    { name: 'Design Systems', priority: 1 },
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
    { name: 'Jest', priority: 2 },
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

  public ngOnInit(): void {
    this.featureToggleService.watch({
      contact: false,
    });
  }
}
