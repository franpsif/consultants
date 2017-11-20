import { Comment } from './comment.model';

export class Consultant {
    public id: number;
    public created: Date;
    public modified: Date;
    public uuid: string;
    public email: string;
    public shortName: string;
    public fullName: string;
    public dateJoined: Date;
    public status: string;
    public gender: string;
    public shortMe: string;
    public location: string;
    public profilePicture: string;
    public comments: Comment[];

    constructor(id: number, created: Date, modified: Date, uuid: string, email: string, shortName: string, fullName: string,
        dateJoined: Date, status: string, gender: string, shortMe: string, location: string, profilePicture: string,
        comments: Comment[]) {
        this.id = id;
        this.created = created;
        this.modified = modified;
        this.uuid = uuid;
        this.email = email;
        this.shortName = shortName;
        this.fullName = fullName;
        this.dateJoined = dateJoined;
        this.status = status;
        this.gender = gender;
        this.shortMe = shortMe;
        this.location = location;
        this.profilePicture = profilePicture;
        this.comments = comments;
    }
}
