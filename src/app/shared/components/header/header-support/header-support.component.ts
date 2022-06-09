import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gt-header-support',
  templateUrl: './header-support.component.html',
  styleUrls: ['./header-support.component.scss'],
})
export class HeaderSupportComponent {
  readonly items: any[] = [
    {
      text: "Support",
      items: [
        {
          text: "Contact us"
        },
        {
          text: "Report an issue"
        }
      ]
    }
  ];

  constructor() {}
}
