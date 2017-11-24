import { Response } from '@angular/http';
import { UsersService } from '../../../users.service';
import { Comment } from '../../../../shared/models/comment.model';
import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.sass']
})
export class AddCommentComponent implements OnInit {
  @Input() consultantId: number;
  comment: Comment = new Comment(0, new Date(), new Date(), '', '', '', 1, '', 0);
  statusTypes = [
    {value: 'N', viewValue: 'Not validated'},
    {value: 'V', viewValue: 'Verified'},
    {value: 'D', viewValue: 'Discarted'}
  ];

  constructor(private usersService: UsersService, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onAddCommentClicked() {
    this.comment.consultant = this.consultantId;

    this.usersService.saveNewComment(this.comment).subscribe(
      (response: Response) => {
        this.usersService.addCommentToUser(response);
        this.showSnackBar('Comment saved successfully');
      },
      (error) => {
        this.showSnackBar('Something went wrong saving the comment');
      }
    );
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, null, {
      duration: 2000
    });
  }

}
