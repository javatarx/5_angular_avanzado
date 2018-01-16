import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs/observable/from';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { OperationsComponent } from './operations.component';
import { OperationsRoutingModule } from './operations.routing';
import { OperationsService } from './operations.service';

describe('OperationsComponent', () => {
  const fakeOperationsService = {
    getOperationsList$ (d) {
      return from([]);
    },
    getNumberOfOperations$ () {
      return from(null);
    }
  };
  let component: OperationsComponent;
  let fixture: ComponentFixture<OperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [OperationsRoutingModule, FormsModule],
      declarations: [
        ListComponent, OperationsComponent, ItemComponent, NewComponent
      ],
      providers: [
        {
          provide: OperationsService,
          useValue: fakeOperationsService
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
