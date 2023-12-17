import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContainerConfig, UiLayoutModule } from '@mo/ui-layout';

@Component({
  standalone: true,
  imports: [RouterModule, UiLayoutModule, NgFor],
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

  public interests: string [] = [
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
  ];
}
