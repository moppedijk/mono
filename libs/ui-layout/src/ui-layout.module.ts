import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ColComponent } from './col/col.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RowComponent } from './row/row.component';
import { SectionComponent } from './section/section.component';
import { ToasterComponent } from './toaster/toaster.component';
import { LoaderComponent } from './loader/loader.component';

const COMPONENTS = [
  ColComponent,
  ContainerComponent,
  FooterComponent,
  HeaderComponent,
  RowComponent,
  SectionComponent,
  ToasterComponent,
  LoaderComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FontAwesomeModule,
  ],
})
export class UiLayoutModule {}
