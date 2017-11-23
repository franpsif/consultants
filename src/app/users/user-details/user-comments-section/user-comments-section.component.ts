import { User } from '../../../shared/models/user.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-comments-section',
  templateUrl: './user-comments-section.component.html',
  styleUrls: ['./user-comments-section.component.sass']
})
export class UserCommentsSectionComponent implements OnInit {
  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
