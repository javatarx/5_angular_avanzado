import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { OperationsService } from '../operations.service';
import { ItemComponent } from './item.component';

describe('ItemComponent', () => {
  const fakeActivatedRoute = {
    snapshot: { params: { id: 1 } }
  };
  const fakeOperationsService = {
    getOperationById$(id) {
      return from([mockItem]);
    }
  };
  const mockItem = { data: 'fake' }
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
