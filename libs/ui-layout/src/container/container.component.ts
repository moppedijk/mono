import { Component, HostListener, Input } from '@angular/core';
import { ScreensizeService } from '@mo/util-core';
import { ContainerConfig } from './container.interface';

@Component({
  selector: 'mo-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent {
  public minHeight = 'auto';

  @Input() config: ContainerConfig = {
    title: '',
    organization: '',
    creator: '',
    logoUrl: '',
    profileImage: '',
    project: '',
  };

  @HostListener('window:resize', ['$event']) onResize() {
    this.setMinHeight();
  }

  constructor(private screensizeService: ScreensizeService) {
    this.setMinHeight();
  }

  private setMinHeight(): void {
    const screenHeight = this.screensizeService.getHeight();
    const margin = 120; // header + footer
    const minHeight = screenHeight - margin;

    if (!window) {
      this.minHeight = 'auto';
    } else {
      this.minHeight = `${minHeight}px`;
    }
  }
}
