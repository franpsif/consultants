import { UsersService } from '../users.service';
import { User } from '../../shared/models/user.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.sass']
})
export class UserDetailsComponent implements OnInit {
  user: User;

  constructor(private dialogRef: MatDialogRef<UserDetailsComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
    private usersService: UsersService) {
    this.user = data.user;
  }

  ngOnInit() {
    this.usersService.userModified.subscribe((user) => {
      if (user.id === this.user.id) {
        this.user = user;
      }
    });
  }

}
