import { Component } from '@angular/core';

@Component({
  selector: 'gt-header-language-selector',
  templateUrl: './header-language-selector.component.html',
  styleUrls: ['./header-language-selector.component.scss'],
})
export class HeaderLanguageSelectorComponent {
  readonly languageOptions = [
    {
      value: 1,
      text: 'Spanish',
    },
    {
      value: 2,
      text: 'German',
    },
  ];

  readonly languageDefaultOption = {
    value: 0,
    text: 'English',
  };
  constructor() {}
}
