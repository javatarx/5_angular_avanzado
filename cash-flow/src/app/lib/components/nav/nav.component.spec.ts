import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreService } from '../../store.service';
import { NavComponent } from './nav.component';
import { TitleComponent } from './title/title.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserMessageComponent } from './user-message/user-message.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [
          NavComponent,
          TitleComponent,
          UserLoginComponent,
          UserMessageComponent
        ],
        providers: [StoreService]
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
