import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../lib/store.service';
import { Operation } from './operation.class';
import { OperationsService } from './operations.service';

@Component({
  selector: 'cf-operations',
  templateUrl: './operations.component.html',
  styles: []
})
export class OperationsComponent implements OnInit {
  public numberOfOperations = 0;
  public operations: Operation[] = [];
  constructor(
    private operationsService: OperationsService,
    private store: StoreService
  ) {}

  ngOnInit() {
    this.refreshData();
  }

  public saveOperation(operation: Operation) {
    this.operationsService
      .saveOperation$(operation)
      .subscribe(this.refreshData);
  }

  public deleteOperation(operation: Operation) {
    this.operationsService
      .deleteOperation$(operation)
      .subscribe(this.refreshData);
  }

  private refreshData = () => {
    this.operationsService
      .getOperationsList$()
      .subscribe(operations => (this.operations = operations));
    this.operationsService
      .getNumberOfOperations$()
      .subscribe(this.showNumberOfOperations);
  }
  private showNumberOfOperations = (data: any) => {
    this.numberOfOperations = data.count;
    this.store.setUserMessage(`Ops: ${this.numberOfOperations}`);
  }
}
