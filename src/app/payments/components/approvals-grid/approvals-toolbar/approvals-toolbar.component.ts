import { Component } from '@angular/core';

@Component({
  selector: 'gt-approvals-toolbar',
  templateUrl: './approvals-toolbar.component.html',
  styleUrls: ['./approvals-toolbar.component.scss']
})
export class ApprovalsToolbarComponent {

  readonly templateType = ['Repetitive', 'Non-repetitive', 'Free form'];
  templateTypeDefault = ['Repetitive', 'Non-repetitive', 'Free form'];

  constructor() { }

}
