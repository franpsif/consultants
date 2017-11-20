import { User } from '../shared/models/user.model';
import { UsersService } from './users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  usersList: User[];

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getUsersList().subscribe(() => {
      this.usersList = this.userService.usersList;
    });
  }

}
