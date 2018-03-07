import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ToolsModule } from '../../lib/tools/tools.module';


@NgModule({
  imports: [
		CommonModule,
		ToolsModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
