import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { OperationsRoutingModule } from '../operations.routing';
import { OperationsComponent } from '../operations.component';
import { ItemComponent } from '../item/item.component';
import { NewComponent } from '../new/new.component';
import { FormsModule } from '@angular/forms';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [OperationsRoutingModule, FormsModule],
      declarations: [ListComponent, OperationsComponent, ItemComponent, NewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
