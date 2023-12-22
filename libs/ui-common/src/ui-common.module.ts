import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './button/button.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { InputComponent } from './input/input.component';
import { ModalComponent } from './modal/modal.component';
import { CreatorComponent } from './creator/creator.component';
import { NavigationListComponent } from './navigation-list/navigation-list.component';
import { NavigationListItemComponent } from './navigation-list/navigation-list-item/navigation-list-item.component';
import { TextareaComponent } from './textarea/textarea.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabsContentComponent } from './tabs/tabs-content/tabs-content.component';
import { CodeComponent } from './code/code.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { ErrorComponent } from './error/error.component';
import { TagComponent } from './tag/tag.component';
import { ClassColorDirective, ClassSizeDirective } from '@mo/util-core';
import { ButtonAnkerComponent } from './button-anker/button-anker.component';

const COMPONENTS = [
  ButtonComponent,
  UserProfileComponent,
  InputComponent,
  ModalComponent,
  CreatorComponent,
  NavigationListComponent,
  NavigationListItemComponent,
  TagComponent,
  TextareaComponent,
  TabsComponent,
  TabsContentComponent,
  CodeComponent,
  SpinnerComponent,
  SkeletonComponent,
  ErrorComponent,
  ButtonAnkerComponent,
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
  ],
})
export class UiCommonModule {}
