import {
  AfterViewInit,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { TabsContentComponent } from './tabs-content/tabs-content.component';
import { TabInterface } from './tabs.interface';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'mo-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  imports: [ButtonComponent],
  standalone: true,
})
export class TabsComponent implements AfterViewInit {
  @ContentChildren(TabsContentComponent)
  public tabsContentComponents!: QueryList<TabsContentComponent>;

  public tabs: TabInterface[];
  public selected: string;

  constructor() {
    this.tabs = [];
    this.selected = '';
  }

  ngAfterViewInit(): void {
    this.tabsContentComponents.forEach((tabsContent) => {
      // Set initial selected tab
      if (tabsContent.visible) {
        this.selected = tabsContent.id;
      }

      this.tabs.push({
        id: tabsContent.id,
        title: tabsContent.title,
      });
    });
  }

  public onSelectTab(id: string): void {
    this.selected = id;
    this.tabsContentComponents.forEach((tabsContent) => {
      tabsContent.visible = Boolean(tabsContent.id === id);
    });
  }
}
