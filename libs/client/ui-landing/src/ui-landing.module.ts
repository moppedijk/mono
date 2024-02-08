import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ClassColorDirective, ClassSizeDirective } from '@mo/client/util-core';
import { TagSearchComponent } from './tag-search/tag-search.component';
import { UiCommonModule } from '@mo/client/ui-common';
import { IntrodctionComponent } from './introduction/introduction.component';

const COMPONENTS = [
    TagSearchComponent,
    IntrodctionComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FontAwesomeModule,
    ClassSizeDirective,
    ClassColorDirective,
    UiCommonModule,
  ],
})
export class UiLandingModule {}
