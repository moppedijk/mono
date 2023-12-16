import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ColComponent } from './col/col.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RowComponent } from './row/row.component';
import { SectionComponent } from './section/section.component';

const COMPONENTS = [
  ColComponent,
  ContainerComponent,
  FooterComponent,
  HeaderComponent,
  RowComponent,
  SectionComponent
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
