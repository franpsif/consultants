import { UserDetailsComponent } from '../user-details/user-details.component';
import { User } from '../../shared/models/user.model';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.sass']
})
export class UserCardComponent {
  @Input() user: User;
  @Input() showDetails = false;

  constructor(private dialog: MatDialog) { }

  onSeeDetails() {
    const userDialogRef = this.dialog.open(UserDetailsComponent, {
      data: {
        user: this.user
      }
    });
  }

}
