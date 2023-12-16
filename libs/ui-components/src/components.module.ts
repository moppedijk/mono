import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './button/button.component';
import { ColComponent } from './col/col.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RowComponent } from './row/row.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SectionComponent } from './section/section.component';
import { InputComponent } from './input/input.component';
import { ModalComponent } from './modal/modal.component';
import { CreatorComponent } from './creator/creator.component';
import { NavigationListComponent } from './navigation-list/navigation-list.component';
import { NavigationListItemComponent } from './navigation-list/navigation-list-item/navigation-list-item.component';
import { TextareaComponent } from './textarea/textarea.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabsContentComponent } from './tabs/tabs-content/tabs-content.component';
import { CodeComponent } from './code/code.component';
import { ToasterComponent } from './toaster/toaster.component';
import { LoaderComponent } from './loader/loader.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { ErrorComponent } from './error/error.component';

const COMPONENTS = [
  ButtonComponent,
  ColComponent,
  ContainerComponent,
  FooterComponent,
  HeaderComponent,
  RowComponent,
  UserProfileComponent,
  SectionComponent,
  InputComponent,
  ModalComponent,
  CreatorComponent,
  NavigationListComponent,
  NavigationListItemComponent,
  TextareaComponent,
  TabsComponent,
  TabsContentComponent,
  CodeComponent,
  ToasterComponent,
  LoaderComponent,
  SpinnerComponent,
  SkeletonComponent,
  ErrorComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    FontAwesomeModule,
  ],
})
export class ComponentsModule {}
