import { User } from '../shared/models/user.model';
import { Comment } from '../shared/models/comment.model';
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UsersService {
    usersList: User[] = [];
    baseUrl = 'http://demopeople.exolever.com/api/';
    userModified = new Subject<User>();

    constructor(private http: Http) { }

    getUsersList(): Observable<User[]> {
        return this.http.get(this.baseUrl + 'consultants')
        .map((response: Response) => {
            const data = response.json();

            for (const user of data) {
                const newComments: Comment[] = [];

                for (const comment of user.comments) {
                    const newComment = new Comment(comment.id, new Date(comment.created), new Date(comment.modified), comment.subject,
                    comment.body, comment.status, comment.rating, comment.user, comment.consultant);

                    newComments.push(newComment);
                }

                const newUser = new User(user.id, new Date(user.created), new Date(user.modified), user.uuid, user.email, user.short_name,
                user.full_name, new Date(user.date_joined), user.status, user.gender, user.short_me, user.location, user.profile_picture,
                newComments);

                this.usersList.push(newUser);
            }

            return this.usersList;
        })
        .catch(
            (error: Response) => {
                return Observable.throw('Something went wrong fetching the users list');
            }
        );
    }

    saveNewComment(comment: Comment): Observable<Response> {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });

        return this.http.post(this.baseUrl + 'comment/', comment, options)
        .catch((error: Response) => {
            return Observable.throw('Something went wrong saving the new comment');
        });
    }

    addCommentToUser(response: Response) {
        const commentObject = response.json();
        const newComment = new Comment(commentObject.id, new Date(commentObject.created), new Date(commentObject.modified),
            commentObject.subject, commentObject.body, commentObject.status, commentObject.rating, commentObject.user,
            commentObject.consultant);
        const userToModify = this.usersList.find(user => user.id === newComment.consultant);

        if (userToModify) {
            userToModify.comments.unshift(newComment);
            this.userModified.next(userToModify);
        }
    }
}
