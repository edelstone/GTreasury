import { Component, OnInit } from '@angular/core';

import { dollarIcon, buildingBlocksIcon } from "@progress/kendo-svg-icons";

import {} from '@clr/icons'

import { ClrShapeDollarBill } from '@clr/icons/shapes/commerce-shapes'

@Component({
  selector: 'gt-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.scss']
})
export class LeftNavigationComponent implements OnInit {

  public kendoIcons = [{ dollarIcon: dollarIcon, buildingBlocksIcon: buildingBlocksIcon }];

  constructor() { }

  ngOnInit(): void {
  }

}
