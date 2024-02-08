import { NgIf } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'mo-tabs-content',
  templateUrl: './tabs-content.component.html',
  styleUrls: ['./tabs-content.component.scss'],
  imports: [NgIf],
  standalone: true,
})
export class TabsContentComponent implements OnChanges {
  @Input() id = '';
  @Input() title: string | undefined = '';
  @Input() visible = false;

  public onChanges: Subject<void>;

  constructor() {
    this.onChanges = new Subject();
  }

  ngOnChanges(): void {
    this.onChanges.next();
  }
}
