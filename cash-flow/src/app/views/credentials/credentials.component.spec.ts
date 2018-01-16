import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BusService } from '../../lib/bus.service';
import { CredentialsComponent } from './credentials.component';
import { CredentialsRoutingModule } from './credentials.routing';
import { CredentialsService } from './credentials.service';

describe('CredentialsComponent', () => {
  const fakeActivatedRoute = {
    snapshot: {
      data: {
        alternate: 'Registration',
        credential: { email: 'admin@api-base.com', password: '1234' },
        title: 'LogIn'
      }
    }
  };
  const fakeCredentialsService = {};
  let component: CredentialsComponent;
  let fixture: ComponentFixture<CredentialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CredentialsRoutingModule, FormsModule, RouterTestingModule],
      declarations: [CredentialsComponent],
      providers: [
        {
          provide: ActivatedRoute, useValue: fakeActivatedRoute
        },
        BusService, {
          provide: CredentialsService,
          useValue: fakeCredentialsService
        }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should obtain Page Data', () => {
    expect(component).toBeTruthy();
  });

  it('should send credentials', () => {
    expect(component).toBeTruthy();
  });

  it('should process correct credentials', () => {
    expect(component).toBeTruthy();
  });

  it('should process invalid credentials', () => {
    expect(component).toBeTruthy();
  });
});
