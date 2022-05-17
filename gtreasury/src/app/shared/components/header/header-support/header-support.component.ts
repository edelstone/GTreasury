import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gt-header-support',
  templateUrl: './header-support.component.html',
  styleUrls: ['./header-support.component.scss']
})
export class HeaderSupportComponent implements OnInit {
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
