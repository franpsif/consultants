import { fakeUser } from './test-data/test-data';
import { User } from '../models/user.model';
import { UsersService } from '../../users/users.service';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Comment } from '../../shared/models/comment.model';

@Injectable()
export class FakeUsersService extends UsersService {
  private content: any;
  private throwError: boolean;

  constructor() {
      super(null);
  }

  public setThrowError(throwError: boolean): void {
    this.throwError = throwError;
  }

  public setGetReturnContent(content: any): void {
    this.content = content;
  }

  public getUsersList(): Observable<User[]> {
    if (this.throwError) {
        return Observable.throw(new Error());
    } else {
        return Observable.of(this.content);
    }
  }

  public saveNewComment(comment: Comment): Observable<Response> {
    if (this.throwError) {
        return Observable.throw(new Error());
    } else {
        return Observable.of(this.content);
    }
  }

  public createNUsers(usersCount: number): void {
    const newContent: User[] = [];

    for (let i = 0; i < usersCount; i++) {
      newContent.push(fakeUser);
    }

    this.content = newContent;
  }
}
