import { fakeUser } from '../../../shared/testing/test-data/test-data';
import { FakeUsersService } from '../../../shared/testing/fake-user-service';
import { UsersService } from '../../users.service';
import { UsersModule } from '../../users.module';
import { CustomMaterialModule } from '../../../material/custom-material.module';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserCommentsSectionComponent } from './user-comments-section.component';

describe('UserCommentsSectionComponent', () => {
  let component: UserCommentsSectionComponent;
  let fixture: ComponentFixture<UserCommentsSectionComponent>;
  const userServiceMock = new FakeUsersService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CustomMaterialModule,
        UsersModule
      ],
      providers: [
        {provide: UsersService, useValue: userServiceMock}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCommentsSectionComponent);
    component = fixture.componentInstance;
    component.user = fakeUser;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
