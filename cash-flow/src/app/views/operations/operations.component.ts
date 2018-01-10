import { Component, OnInit } from '@angular/core';
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

  constructor(private operationsService: OperationsService) {}

  public ngOnInit() {
    this.refreshData();
  }
  public saveOperation(operation: Operation) {
    this.operationsService
      .saveOperation$(operation)
      .subscribe(data => this.refreshData());
  }
  public deleteOperation(operation: Operation) {
    this.operationsService
      .deleteOperation$(operation)
      .subscribe(data => this.refreshData());
  }
  private refreshData() {
    this.operationsService
      .getOperationsList$()
      .subscribe(data => (this.operations = data));
    this.operationsService
      .getNumberOfOperations$()
      .subscribe(data => (this.numberOfOperations = data.count));
  }
}
