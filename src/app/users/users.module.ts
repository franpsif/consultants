import { FormsModule } from '@angular/forms';
import { AddCommentComponent } from './user-details/user-comments-section/add-comment/add-comment.component';
import { CommentCardComponent } from './user-details/user-comments-section/comment-card/comment-card.component';
import { UserCommentsSectionComponent } from './user-details/user-comments-section/user-comments-section.component';
import { CustomMaterialModule } from '../material/custom-material.module';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { UserCardComponent } from './user-card/user-card.component';
import { HttpModule } from '@angular/http';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  imports: [
    SharedModule,
    CustomMaterialModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    UsersComponent,
    UserCardComponent,
    UserDetailsComponent,
    UserCommentsSectionComponent,
    CommentCardComponent,
    AddCommentComponent
  ],
  entryComponents: [
    UserDetailsComponent
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
