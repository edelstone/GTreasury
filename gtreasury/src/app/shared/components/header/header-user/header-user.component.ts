import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/model/user';

@Component({
  selector: 'gt-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.scss']
})
export class HeaderUserComponent implements OnInit {
  user: User
  readonly userMenuItems = [
    {
      text:'Option 1'
    }
  ]

  constructor() { }

  ngOnInit(): void {
    // TODO:
    // Load information from a service
    this.user = new User({
      initials: 'JS'
    });
  }

}
