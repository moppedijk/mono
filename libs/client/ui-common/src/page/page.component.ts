import { Component, Input, OnInit, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'mo-page',
  templateUrl: './page.component.html',
  standalone: true,
})
export class PageComponent implements OnInit {
  private meta = inject(Meta);
  private title = inject(Title);

  @Input() pageTitle = '';
  @Input() description = '';
  @Input() creator = '';
  @Input() url = '';

  public ngOnInit(): void {
    this.title.setTitle(this.pageTitle);
    this.meta.addTag({ name: 'description', content: this.description });
    this.meta.addTag({ name: 'twitter:card', content: 'summary' });
    this.meta.addTag({ name: 'twitter:creator', content: this.creator });
    this.meta.addTag({ name: 'og:url', content: this.url });
    this.meta.addTag({ name: 'og:title', content: this.pageTitle });
    this.meta.addTag({ name: 'og:description', content: this.description });
  }
}
