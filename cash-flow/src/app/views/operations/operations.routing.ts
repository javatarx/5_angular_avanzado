import { ItemComponent } from './item/item.component';
import { NgModule } from '@angular/core';
import { OperationsComponent } from './operations.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: OperationsComponent
  },
  {
    path: ':id',
    component: ItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationsRoutingModule { }
