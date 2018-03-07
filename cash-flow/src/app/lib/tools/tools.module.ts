import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ControlErrorComponent } from "./control-error/control-error.component";
import { ControlComponent } from "./control/control.component";
import { FlexLayoutModule } from "@angular/flex-layout";
@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		FlexLayoutModule
	],
	declarations: [ControlErrorComponent, ControlComponent],
	exports: [
		ControlComponent,
		ReactiveFormsModule,
		FlexLayoutModule
	]
})
export class ToolsModule {}
