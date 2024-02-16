import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Tag } from './tag';
import { NgFor, NgIf } from '@angular/common';

export enum ShowTagsEnun {
  All, Default
}

@Component({
  selector: 'mo-tag-search',
  templateUrl: './tag-search.component.html',
  styleUrl: './tag-search.component.scss',
  standalone: true,
  imports: [NgFor, NgIf]
})
export class TagSearchComponent implements OnInit, OnChanges {
  
  @Input() tags: Tag[] = [];
  @Input() showTags = ShowTagsEnun.Default;
  
  public allTags = false;
  public visibleTags: Tag[] = [];
  public hiddenTags: Tag[] = [];

  ngOnInit(): void {
    this.filterTags();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['showTags']) {
      this.showAllTags(changes['showTags'].currentValue);
    }
  }

  public showAllTags(showTags: ShowTagsEnun): boolean {
    if (showTags === ShowTagsEnun.All) {
      this.visibleTags = this.tags;
      this.allTags = true;
    } else {
      this.filterTags();
      this.allTags = false;
    }

    return false;
  }

  private filterTags(): void {
    this.visibleTags = this.tags.filter((tag) => this.filterByPriority(tag, 1));
    this.hiddenTags = this.tags.filter((tag) => this.filterByPriority(tag, 2));
  }

  private filterByPriority(tag: Tag, priority: 1 | 2): boolean {
    return Boolean(tag.priority === priority);
  }
}
