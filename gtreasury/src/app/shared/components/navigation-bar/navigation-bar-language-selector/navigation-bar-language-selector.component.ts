import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gt-navigation-bar-language-selector',
  templateUrl: './navigation-bar-language-selector.component.html',
  styleUrls: ['./navigation-bar-language-selector.component.scss']
})
export class NavigationBarLanguageSelectorComponent implements OnInit {

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
