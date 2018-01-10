import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Operation } from '../operation.class';

@Component({
  selector: 'cf-new',
  templateUrl: './new.component.html',
  styles: []
})
export class NewComponent implements OnInit {
  @Input() public numberOfOperations = 0;
  @Output() public save = new EventEmitter<Operation>();

  public kindsOfOperations = ['Income', 'Expense'];
  public operation: Operation = new Operation();
  public title = 'New Operation';

  constructor() {}

  public ngOnInit() {}

  public saveOperation() {
    this.save.emit(this.operation);
    this.operation = new Operation();
  }
}
