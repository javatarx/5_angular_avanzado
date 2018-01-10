import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NotFoundComponent],
  exports: [NotFoundComponent]
})
export class NotFoundModule {}
