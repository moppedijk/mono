import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';
import { ScreensizeService, WINDOW } from '@mo/util-core';
import { ContainerConfig } from './container.interface';

@Component({
  selector: 'mo-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {

  public minHeight = 'auto';

  @Input() config: ContainerConfig = {
    title: '',
    organization: '',
    creator: '',
    logoUrl: '',
    profileImage: '',
    project: '',
    projectLink: '',
  };

  constructor(
    private screensizeService: ScreensizeService,
    @Inject(WINDOW) private window: Window
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
