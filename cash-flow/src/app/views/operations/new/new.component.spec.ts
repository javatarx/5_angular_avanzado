import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NewComponent } from './new.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Operation } from '../operation.class';

describe('NewComponent', () => {
  let component: NewComponent;
  let fixture: ComponentFixture<NewComponent>;
  let submitEl: DebugElement;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule],
        declarations: [NewComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call save with the form operation data', () => {
    let theFormValue;
    component.save.subscribe(value => (theFormValue = value));
    submitEl = fixture.debugElement.query(By.css('button'));
    submitEl.triggerEventHandler('click', null);
    expect(theFormValue.amount).toBe(0);
  });
});
