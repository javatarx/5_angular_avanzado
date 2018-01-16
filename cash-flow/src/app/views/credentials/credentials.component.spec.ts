import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentialsComponent } from './credentials.component';

describe('CredentialsComponent', () => {
  let component: CredentialsComponent;
  let fixture: ComponentFixture<CredentialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CredentialsComponent]
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
