import { FakeUsersService } from '../../../../shared/testing/fake-user-service';
import { UsersService } from '../../../users.service';
import { FormsModule } from '@angular/forms';
import { UsersModule } from '../../../users.module';
import { CustomMaterialModule } from '../../../../material/custom-material.module';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddCommentComponent } from './add-comment.component';

describe('AddCommentComponent', () => {
  let component: AddCommentComponent;
  let fixture: ComponentFixture<AddCommentComponent>;
  const userServiceMock = new FakeUsersService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CustomMaterialModule,
        UsersModule,
        FormsModule
      ],
      providers: [
        {provide: UsersService, useValue: userServiceMock}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onAddCommentClicked', () => {
    it('should call addCommentToUser method from the service and show a successful message if the call is successfully', () => {
      spyOn(userServiceMock, 'addCommentToUser');
      spyOn(component, 'showSnackBar');

      component.onAddCommentClicked();

      expect(userServiceMock.addCommentToUser).toHaveBeenCalled();
      expect(component.showSnackBar).toHaveBeenCalledWith('Comment saved successfully');
    });

    it('should not call addCommentToUser method from the service and show an error message if the call is not successfully', () => {
      spyOn(userServiceMock, 'addCommentToUser');
      spyOn(component, 'showSnackBar');

      userServiceMock.setThrowError(true);

      component.onAddCommentClicked();

      expect(userServiceMock.addCommentToUser).not.toHaveBeenCalled();
      expect(component.showSnackBar).toHaveBeenCalledWith('Something went wrong saving the comment');
    });
  });
});
