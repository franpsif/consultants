import { UsersService } from '../users.service';
import { FakeUsersService } from '../../shared/testing/fake-user-service';
import { fakeComment, fakeUser } from '../../shared/testing/test-data/test-data';
import { User } from '../../shared/models/user.model';
import { CustomMaterialModule } from '../../material/custom-material.module';
import { UsersModule } from '../users.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserDetailsComponent } from './user-details.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;
  const user = fakeUser;
  const userServiceMock = new FakeUsersService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        UsersModule,
        CustomMaterialModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { user: user } },
        { provide: MatDialogRef, useValue: { close() {}}},
        { provide: UsersService, useValue: userServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the user property from the data passed to the dialog', () => {
    expect(component.user).toBeDefined();
    expect(component.user.id).toBe(999);
  });

  it('should subscribe to the user changes and update the one selected if it is the one modified', () => {
    userServiceMock.userModified.next(new User(999, new Date(), new Date, '', '', '', '', new Date(), '', '', '', '', '', [fakeComment]));

    expect(component.user.comments.length).toBe(1);
  });
});
