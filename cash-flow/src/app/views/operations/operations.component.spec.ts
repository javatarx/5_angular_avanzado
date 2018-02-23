import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs/observable/from';
import { StoreService } from '../../lib/store.service';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { Operation } from './operation.class';
import { OperationsComponent } from './operations.component';
import { OperationsRoutingModule } from './operations.routing';
import { OperationsService } from './operations.service';

describe('OperationsComponent', () => {
  const fakeOperationsService = {
    getOperationsList$(d) {
      return from([fakeOperations]);
    },
    getNumberOfOperations$() {
      return from([fakeNumber]);
    },
    saveOperation$(operation: Operation) {
      operation._id = Date.now().toString();
      fakeOperations.push(operation);
      fakeNumber.number = fakeOperations.length;
      return from([operation]);
    }
  };
  const fakeOperations = [new Operation()];
  const fakeNumber = { number: fakeOperations.length };
  let component: OperationsComponent;
  let fixture: ComponentFixture<OperationsComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [OperationsRoutingModule, FormsModule],
        declarations: [
          ListComponent,
          OperationsComponent,
          ItemComponent,
          NewComponent
        ],
        providers: [
          {
            provide: OperationsService,
            useValue: fakeOperationsService
          },
          StoreService
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  fit('should save an operation', () => {
    component.saveOperation(new Operation());
    fixture.detectChanges();
    fixture.whenStable().then(result => {
      expect(component.operations.length).toBe(2);
    });
  });
  it('should delete an operation', () => {});
});
