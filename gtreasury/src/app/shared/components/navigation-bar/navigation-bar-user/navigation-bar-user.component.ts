import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/model/user';

@Component({
  selector: 'gt-navigation-bar-user',
  templateUrl: './navigation-bar-user.component.html',
  styleUrls: ['./navigation-bar-user.component.scss']
})
export class NavigationBarUserComponent implements OnInit {
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
      initials: 'GT'
    });
  }

}
