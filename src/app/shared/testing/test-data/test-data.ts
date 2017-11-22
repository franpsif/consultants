import { User } from '../../models/user.model';

export const mockResponse = [
    {
        id: 1,
        comments: [
            {
                id: 621,
                created: '2017-11-22T17:43:05.067595Z',
                modified: '2017-11-22T17:43:05.067793Z',
                subject: 124,
                body: 'wqe',
                status: 'V',
                rating: 3,
                user: 1,
                consultant: 1
            }
        ],
        created: '2017-11-20T06:58:59.659606Z',
        modified: '2017-11-20T06:58:59.673221Z',
        uuid: '93793c62-7182-c724-e090-aae5e1adaeeb',
        email: 'beverleyobrien@hotmail.com',
        short_name: 'Hugh',
        full_name: 'Iain Foster',
        date_joined: '2017-11-20T06:58:59.659636Z',
        status: 'A',
        gender: 'M',
        short_me: 'Deserunt neque dolorum doloribus perferendis enim.',
        location: '245 Johnson mountain\nEast Graham\nW8 2SS',
        profile_picture: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
        id: 2,
        comments: [
            {
                id: 498,
                created: '2017-11-22T17:43:05.067595Z',
                modified: '2017-11-22T17:43:05.067793Z',
                subject: 124,
                body: 'wqe',
                status: 'V',
                rating: 3,
                user: 1,
                consultant: 1
            }
        ],
        created: '2017-11-20T06:58:59.659606Z',
        modified: '2017-11-20T06:58:59.673221Z',
        uuid: '93793c62-7182-c724-e090-aae5e1adaeeb',
        email: 'beverleyobrien@hotmail.com',
        short_name: 'Julie',
        full_name: 'Simon Sims',
        date_joined: '2017-11-20T06:58:59.659636Z',
        status: 'A',
        gender: 'M',
        short_me: 'Deserunt neque dolorum doloribus perferendis enim.',
        location: '245 Johnson mountain\nEast Graham\nW8 2SS',
        profile_picture: 'https://randomuser.me/api/portraits/men/2.jpg'
    }
];

export const fakeUser = new User(999, new Date(), new Date(), '', '', '', '', new Date(), '', '', '', '', '', []);
