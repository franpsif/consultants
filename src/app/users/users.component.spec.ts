import { FakeUsersService } from '../shared/testing/fake-user-service';
import { Http } from '@angular/http';
import { UsersService } from './users.service';
import { UsersModule } from './users.module';
import { CustomMaterialModule } from '../material/custom-material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
    let component: UsersComponent;
    let fixture: ComponentFixture<UsersComponent>;
    const userServiceMock = new FakeUsersService();
    const usersToCreate = 14;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          CustomMaterialModule,
          UsersModule
        ],
        declarations: [],
        providers: [
            { provide: UsersService, useValue: userServiceMock }
        ]
      })
      .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UsersComponent);
        component = fixture.componentInstance;

        userServiceMock.createNUsers(usersToCreate);

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('showMoreUsers', () => {
        it('should be executed when the list of users is obtained from the server', () => {
            expect(component.showedUserList.length).toBe(component.usersToAddEachTime);
            expect(component.usersShowedCount).toBe(component.usersToAddEachTime + 1);
        });

        it('should add the number of users that the usersToAddEachTime const has as a value, and not fail' +
        'if there are not that number of users remaining in the usersList', () => {
            component.showMoreUsers();

            expect(component.showedUserList.length).toBe(usersToCreate - 1);
        });
    });

    afterEach(() => {
        if (this.fixture) {
            this.fixture.destroy();
        }
    });
});
