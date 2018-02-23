import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { OperationsService } from '../operations.service';
import { ItemComponent } from './item.component';
import { Operation } from '../operation.class';

describe('ItemComponent', () => {
  const fakeActivatedRoute = {
    snapshot: { params: { id: 1 } }
  };
  const fakeOperationsService = {
    getOperationById$(id) {
      return from([fakeItem]);
    }
  };
  const fakeItem = new Operation();
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;
  let operationsService: OperationsService;

  beforeEach(
    async(() => {
      const bed = TestBed.configureTestingModule({
        declarations: [ItemComponent],
        providers: [
          {
            provide: ActivatedRoute,
            useValue: fakeActivatedRoute
          },
          {
            provide: OperationsService,
            useValue: fakeOperationsService
          }
        ]
      });
      bed.compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call getItem with the correct id', () => {
    expect(component.operation).toBe(fakeItem);
  });
});
