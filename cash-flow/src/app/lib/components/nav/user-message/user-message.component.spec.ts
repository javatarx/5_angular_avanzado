import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMessageComponent } from './user-message.component';
import { StoreService } from '../../../store.service';

describe('UserMessageComponent', () => {
  let component: UserMessageComponent;
  let fixture: ComponentFixture<UserMessageComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [UserMessageComponent],
        providers: [StoreService]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
