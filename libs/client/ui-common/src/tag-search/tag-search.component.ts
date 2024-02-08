import { Component, Input, OnInit } from '@angular/core';
import { Tag } from './tag';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'mo-tag-search',
  templateUrl: './tag-search.component.html',
  styleUrl: './tag-search.component.scss',
  standalone: true,
  imports: [NgFor, NgIf]
})
export class TagSearchComponent implements OnInit {
  
  @Input() tags: Tag[] = [];
  
  public allTags = false;
  public visibleTags: Tag[] = [];
  public hiddenTags: Tag[] = [];

  ngOnInit(): void {
    this.filterTags();
  }

  public showAllTags(): boolean {
    
    if (!this.allTags) {
      this.visibleTags = this.tags;
    } else {
      this.filterTags();
    }

    this.allTags = !this.allTags;
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
