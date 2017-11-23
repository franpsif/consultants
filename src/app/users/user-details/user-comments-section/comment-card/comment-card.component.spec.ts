import { fakeComment } from '../../../../shared/testing/test-data/test-data';
import { UsersModule } from '../../../users.module';
import { CustomMaterialModule } from '../../../../material/custom-material.module';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CommentCardComponent } from './comment-card.component';

describe('CommentCardComponent', () => {
  let component: CommentCardComponent;
  let fixture: ComponentFixture<CommentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CustomMaterialModule,
        UsersModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentCardComponent);
    component = fixture.componentInstance;
    component.comment = fakeComment;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
