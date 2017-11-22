import { mockResponse } from '../shared/testing/test-data/test-data';
import { MockBackend } from '@angular/http/testing';
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

  afterEach(() => {
    if (this.fixture) {
      this.fixture.destroy();
    }
  });
});
