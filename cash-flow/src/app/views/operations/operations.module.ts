import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { NgModule } from '@angular/core';
import { OperationsComponent } from './operations.component';
import { OperationsRoutingModule } from './operations.routing';
import { OperationsService } from './operations.service';

@NgModule({
  imports: [
    CommonModule,
    OperationsRoutingModule,
    FormsModule
  ],
  declarations: [
    ItemComponent,
    ListComponent,
    NewComponent,
    OperationsComponent,
  ],
  providers: [OperationsService]
})
export class OperationsModule { }
