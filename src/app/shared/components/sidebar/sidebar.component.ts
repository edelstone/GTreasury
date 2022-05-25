import { Component } from '@angular/core';

import { dollarIcon, buildingBlocksIcon } from '@progress/kendo-svg-icons';

import {} from '@clr/icons';

import { ClrShapeDollarBill } from '@clr/icons/shapes/commerce-shapes';

@Component({
  selector: 'gt-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public kendoIcons = [
    { dollarIcon: dollarIcon, buildingBlocksIcon: buildingBlocksIcon },
  ];

  constructor() {}
}
