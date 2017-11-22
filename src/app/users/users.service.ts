import { User } from '../shared/models/user.model';
import { Comment } from '../shared/models/comment.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UsersService {
    usersList: User[] = [];
    baseUrl = 'http://demopeople.exolever.com/api/';

    constructor(private http: Http) { }

    getUsersList(): Observable<User[]> {
        return this.http.get(this.baseUrl + 'consultants')
        .map((response: Response) => {
            const data = response.json();

            for (const user of data) {
                const newComments: Comment[] = [];

                for (const comment of user.comments) {
                    const newComment = new Comment(comment.id, comment.created, comment.modified, comment.subject,
                    comment.body, comment.status, comment.rating, comment.user, comment.consultant);

                    newComments.push(newComment);
                }

                const newUser = new User(user.id, user.created, user.modified, user.uuid, user.email, user.short_name,
                user.full_name, user.date_joined, user.status, user.gender, user.short_me, user.location, user.profile_picture,
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

}
