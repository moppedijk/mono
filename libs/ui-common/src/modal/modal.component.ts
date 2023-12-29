import { DOCUMENT } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  Output,
  Renderer2,
} from '@angular/core';
import { faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ScreensizeService } from '@mo/util-core';

const BODY_CSS_CLASS = 'body-freeze';

@Component({
  selector: 'mo-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  public icon: IconDefinition;
  public maxHeight!: string;

  @Input() title = '';
  @Output() closed = new EventEmitter<void>();

  @HostListener('window:resize', ['$event']) onResize() {
    this.setMaxHeight();
  }

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private screensizeService: ScreensizeService,
  ) {
    this.icon = faTimes;
    this.setMaxHeight();
  }

  ngOnInit(): void {
    this.freezeBody();
  }

  ngOnDestroy(): void {
    this.defrostBody();
  }

  public onClose(): void {
    this.closed.emit();
  }

  private freezeBody(): void {
    if (this.body) {
      this.renderer.addClass(this.body, BODY_CSS_CLASS);
    }
  }

  private defrostBody(): void {
    if (this.body) {
      this.renderer.removeClass(this.body, BODY_CSS_CLASS);
    }
  }

  private get body(): HTMLBodyElement {
    const elements = this.document.getElementsByTagName('body');
    const body = elements[0];

    return body;
  }

  private setMaxHeight(): void {
    const screenHeight = this.screensizeService.getHeight();
    this.maxHeight = `${screenHeight}px`;
  }
}
