import { Injectable } from '@angular/core';

export enum AppArea {
  Dashboard,
  Cash,
  FinancialInstruments,
  Payments,
  Reports,
  DataManagement,
  Admin
}

@Injectable({
  providedIn: 'root'
})
export class UiHelperService {

  constructor() { }

  setPropertiesFor(appArea: AppArea) {
    var highlightVariable = '--' + AppArea[appArea].toString().toLowerCase() + '-highlight-color';
    var highlightColor = getComputedStyle(document.documentElement).getPropertyValue(highlightVariable);
    document.documentElement.style.setProperty('--highlight-color', highlightColor);
  }

}
