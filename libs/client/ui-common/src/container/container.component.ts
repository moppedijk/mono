import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';
import { ScreensizeService, WINDOW } from '@mo/client/util-core';
import { LoaderComponent } from '../loader/loader.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ToasterComponent } from '../toaster/toaster.component';

@Component({
  selector: 'mo-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  standalone: true,
  imports: [
    LoaderComponent,
    HeaderComponent,
    FooterComponent,
    ToasterComponent,
  ],
})
export class ContainerComponent implements OnInit {
  public minHeight = 'auto';

  @Input() organizationName = '';
  @Input() logoUrl = '';
  @Input() profileImage = '';
  @Input() projectName = '';
  @Input() projectLink = '';

  constructor(
    private screensizeService: ScreensizeService,
    @Inject(WINDOW) private window: Window,
  ) {}

  @HostListener('window:resize', ['$event'])
  public onResize() {
    this.setMinHeight();
  }

  public ngOnInit(): void {
    this.setMinHeight();
  }

  private setMinHeight(): void {
    const screenHeight = this.screensizeService.getHeight();
    const margin = 120; // header + footer
    const minHeight = screenHeight - margin;

    if (!this.window) {
      this.minHeight = 'auto';
    } else {
      this.minHeight = `${minHeight}px`;
    }
  }
}
