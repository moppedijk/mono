import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  ButtonAnkerComponent,
  ButtonComponent,
  ColComponent,
  ContainerComponent,
  IntrodctionComponent,
  PageComponent,
  RowComponent,
  SectionComponent,
  ShowTagsEnun,
  TagSearchComponent,
} from '@mo/client/ui-common';
import { ContactComponent } from './contact/contact.component';
import {
  APP_LOGO_URL_TOKEN,
  APP_ORGANIZATION_NAME_TOKEN,
  APP_PROFILE_IMAGE_TOKEN,
  APP_PROJECT_LINK_TOKEN,
  APP_PROJECT_NAME_TOKEN,
} from '@mo/client/util-core';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    NgFor,
    AsyncPipe,
    NgIf,
    ButtonComponent,
    ButtonAnkerComponent,
    ColComponent,
    RowComponent,
    IntrodctionComponent,
    TagSearchComponent,
    SectionComponent,
    ContainerComponent,
    ContactComponent,
    PageComponent,
  ],
  selector: 'mo-feature-home',
  templateUrl: './feature-home.component.html',
})
export class FeatureHomeComponent {
  public showTags = ShowTagsEnun.Default;
  public showTagsEnun = ShowTagsEnun;

  public logoUrl = inject(APP_LOGO_URL_TOKEN);
  public profileImage = inject(APP_PROFILE_IMAGE_TOKEN);
  public organizationName = inject(APP_ORGANIZATION_NAME_TOKEN);
  public projectName = inject(APP_PROJECT_NAME_TOKEN);
  public projectLink = inject(APP_PROJECT_LINK_TOKEN);
}
