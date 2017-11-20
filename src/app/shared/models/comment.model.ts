
export class Comment {
    public id: number;
    public created: Date;
    public modified: Date;
    public subject: string;
    public body: string;
    public status: string;
    public rating: number;
    public user: string;
    public consultant: number;

    constructor(id: number, created: Date, modified: Date, subject: string, body: string, status: string, rating: number,
        user: string, consultant: number ) {
        this.id = id;
        this.created = created;
        this.modified = modified;
        this.subject = subject;
        this.body = body;
        this.status = status;
        this.rating = rating;
        this.user = user;
        this.consultant = consultant;
    }
}
