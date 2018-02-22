import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { from } from 'rxjs/observable/from';
import { _throw } from 'rxjs/observable/throw';
import { CredentialsComponent } from './credentials.component';
import { CredentialsRoutingModule } from './credentials.routing';
import { CredentialsService } from './credentials.service';
import { StoreService } from '../../lib/store.service';

describe('CredentialsComponent', () => {
  const fakeRegistrationData = {
    alternate: 'LogIn',
    credential: { email: '', password: '' },
    title: 'Registration'
  };
  const fakeLoginData = {
    alternate: 'Registration',
    credential: { email: 'admin@api-base.com', password: '1234' },
    title: 'LogIn'
  };
  const fakeActivatedRoute = {
    snapshot: {
      data: fakeRegistrationData
    }
  };
  const fakeCredentialsService = {
    sendCredential(credential, service) {
      if (credential.email !== 'hacker@evil.com') {
        console.log('from([{ token: fake }]');
        return from([{ token: 'fake' }]);
      } else {
        console.log('_throw(invalid)');
        return _throw('invalid');
      }
    }
  };
  const fakeStoreService = {
    emitUserToken(token) {
      console.log('emitUserToken', token);
    }
  };
  let component: CredentialsComponent;
  let fixture: ComponentFixture<CredentialsComponent>;
  let debugElement;
  let spy: any;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [CredentialsRoutingModule, FormsModule, RouterTestingModule],
        declarations: [CredentialsComponent],
        providers: [
          {
            provide: ActivatedRoute,
            useValue: fakeActivatedRoute
          },
          {
            provide: StoreService,
            useValue: fakeStoreService
          },
          {
            provide: CredentialsService,
            useValue: fakeCredentialsService
          }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CredentialsComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should obtain Page Data', () => {
    expect(component.pageData.title).toBe(fakeRegistrationData.title);
  });

  it('should show Page Data', () => {
    const submitEl = fixture.debugElement.query(By.css('button'));
    expect(submitEl).toBeTruthy();
    const submitNative = submitEl.nativeElement;
    expect(submitNative.textContent).toContain(fakeRegistrationData.title);
  });

  fit('should send credentials', () => {
    spy = spyOn(component, 'sendCredential');
    const submitEl = fixture.debugElement.query(By.css('button'));
    const submitNative = submitEl.nativeElement;
    submitNative.click();
    fixture.detectChanges();
    expect(spy.calls.any()).toBe(true, 'sendCredential called');
  });

  fit('should process correct credentials', () => {
    const submitEl = fixture.debugElement.query(By.css('button'));
    const submitNative = submitEl.nativeElement;
    submitNative.click();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  fit('should process invalid credentials', () => {
    component.pageData.credential.email = 'hacker@evil.com';
    const submitEl = fixture.debugElement.query(By.css('button'));
    const submitNative = submitEl.nativeElement;
    submitNative.click();
    fixture.detectChanges();
    expect(component.errorMessage).toBe('Invalid Credentials');
  });
});
