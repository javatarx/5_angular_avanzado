import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ItemComponent } from '../item/item.component';
import { NewComponent } from '../new/new.component';
import { OperationsComponent } from '../operations.component';
import { OperationsRoutingModule } from '../operations.routing';
import { ListComponent } from './list.component';

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
