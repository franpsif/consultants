import { fakeComment, fakeUser, mockResponse } from '../shared/testing/test-data/test-data';
import { MockBackend, MockConnection } from '@angular/http/testing';
import {
    BaseRequestOptions,
    ConnectionBackend,
    Http,
    HttpModule,
    RequestOptions,
    ResponseOptions,
    XHRBackend,
    Response
} from '@angular/http';
import { async, inject, TestBed, tick } from '@angular/core/testing';
import { UsersService } from './users.service';

describe('Service: Users', () => {
  let userService: UsersService;
  let mockBackend: MockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        UsersService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });
  });

  it('should be injectable', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));

  describe('getUsersList', () => {
    beforeEach(inject([UsersService, XHRBackend], (injectedUserService, injectedMockBackend) => {
      userService = injectedUserService;
      mockBackend = injectedMockBackend;

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });
    }));

    it('should return the correct number of users', () => {
      userService.getUsersList().subscribe((users) => {
        expect(users.length).toBe(2);
      });
    });

    it('should map correctly the users', () => {
      userService.getUsersList().subscribe((users) => {
        expect(users[0].shortName).toBe('Hugh');
        expect(users[1].shortName).toBe('Julie');
      });
    });

    it('should map correctly the comments', () => {
      userService.getUsersList().subscribe((users) => {
        expect(users[0].comments[0].id).toBe(621);
        expect(users[1].comments[0].id).toBe(498);
      });
    });
  });

  describe('saveNewComment', () => {
    let connectionInfo: MockConnection;

    beforeEach(inject([UsersService, XHRBackend], (injectedUserService, injectedMockBackend) => {
      userService = injectedUserService;
      mockBackend = injectedMockBackend;

      mockBackend.connections.subscribe((connection) => {
        connectionInfo = connection;
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify([{}])
        })));
      });
    }));

    it('should set the header as application/json before to call the server', () => {
      userService.saveNewComment(fakeComment);
      expect(connectionInfo.request.headers.get('content-type')).toBe('application/json');
    });

    it('should send to the server the correct comment', () => {
      userService.saveNewComment(fakeComment);
      expect(JSON.parse(connectionInfo.request.getBody()).id).toBe(999);
    });
  });

  describe('addCommentToUser', () => {
    it('should add the new comment to the user if it exists and notify the change',
    inject([UsersService], (injectedUserService: UsersService) => {
      injectedUserService.usersList.push(fakeUser);

      const response = new Response(new ResponseOptions());
      spyOn(response, 'json').and.returnValue({
        id: 888,
        created: new Date(),
        modified: new Date(),
        subject: '',
        body: '',
        status: '',
        rating: 10,
        user: '',
        consultant: 999
      });

      spyOn(injectedUserService.userModified, 'next');

      injectedUserService.addCommentToUser(response);

      expect(injectedUserService.usersList[0].comments.length).toBe(1);
      expect(injectedUserService.userModified.next).toHaveBeenCalled();
    }));
  });

  afterEach(() => {
    if (this.fixture) {
      this.fixture.destroy();
    }
  });
});
