import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gt-navigation-bar-support',
  templateUrl: './navigation-bar-support.component.html',
  styleUrls: ['./navigation-bar-support.component.scss']
})
export class NavigationBarSupportComponent implements OnInit {
  readonly supportOptions = [
    {
      value: 1,
      text: 'Option 1',
    },
    {
      value: 2,
      text: 'Option 2',
    },
  ];
  
  readonly supportDefaultOption = {
    value: 0,
    text: 'Support',
  };
  constructor() { }

  ngOnInit(): void {
  }

}
