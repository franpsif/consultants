import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { CustomMaterialModule } from './material/custom-material.module';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CustomMaterialModule,
        UsersModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        UsersService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  afterEach(() => {
    if (this.fixture) {
      this.fixture.destroy();
    }
  });
});
