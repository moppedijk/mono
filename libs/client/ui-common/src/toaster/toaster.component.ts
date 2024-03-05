import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ToasterService } from '@mo/client/util-core';

@Component({
  selector: 'mo-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss'],
  standalone: true,
  imports: [NgFor],
})
export class ToasterComponent {
  private timeout = 2000;
  public messages: string[];

  constructor(private toasterService: ToasterService) {
    this.messages = [];
    this.toasterService
      .getMessage$()
      .subscribe((message) => this.handleMessage(message));
  }

  private handleMessage(message: string): void {
    this.messages.push(message);
    setTimeout(() => this.messages.pop(), this.timeout);
  }
}
