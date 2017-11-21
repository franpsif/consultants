import { User } from '../shared/models/user.model';
import { UsersService } from './users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  usersList: User[] = [];
  showedUserList: User[] = [];
  usersShowedCount = 1;
  usersToAddEachTime = 9;

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getUsersList().subscribe(() => {
      this.usersList = this.userService.usersList;
      this.showMoreUsers();
    });
  }

  showMoreUsers() {
    for (let index = this.usersShowedCount; index < this.usersShowedCount + this.usersToAddEachTime; index++) {
      const userToAdd = this.usersList[index];
      if (userToAdd) {
        this.showedUserList.push(userToAdd);
      }
    }

    this.usersShowedCount += this.usersToAddEachTime;
  }

}
