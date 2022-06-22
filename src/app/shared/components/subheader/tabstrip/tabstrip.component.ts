import { Component, Input } from '@angular/core';

export interface TabStrip {
  title: string;
  class?: string;
  routerLink?: string;
}
@Component({
  selector: 'gt-tabstrip',
  templateUrl: './tabstrip.component.html',
  styleUrls: ['./tabstrip.component.scss'],
})
export class TabstripComponent {
  @Input() tabs: TabStrip[];

  constructor() {}
}
