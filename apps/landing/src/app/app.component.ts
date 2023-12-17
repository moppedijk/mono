import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { UiCommonModule } from '@mo/ui-common';
import { ContainerConfig, UiLayoutModule } from '@mo/ui-layout';

@Component({
  standalone: true,
  imports: [RouterModule, UiLayoutModule],
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
}
