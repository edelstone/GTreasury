import { Component, Input } from '@angular/core';
import { TabStrip } from './tabstrip/tabstrip.component';

@Component({
  selector: 'gt-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss'],
})
export class SubheaderComponent {
  constructor() {}

  @Input() tabs: TabStrip[];
}
