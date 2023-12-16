import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { UiCommonModule } from '@mo/ui-common';
import { UiLayoutModule } from '@mo/ui-layout';

@Component({
  standalone: true,
  imports: [RouterModule, UiLayoutModule],
  selector: 'mo-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Moppedijk - Landing';
}
