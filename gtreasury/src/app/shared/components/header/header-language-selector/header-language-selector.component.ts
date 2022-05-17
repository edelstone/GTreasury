import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gt-header-language-selector',
  templateUrl: './header-language-selector.component.html',
  styleUrls: ['./header-language-selector.component.scss']
})
export class HeaderLanguageSelectorComponent implements OnInit {

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
  constructor() { }

  ngOnInit(): void {
  }

}
