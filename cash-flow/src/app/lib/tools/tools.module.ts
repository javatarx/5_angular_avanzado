import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ControlErrorComponent } from "./control-error/control-error.component";
import { ControlComponent } from "./control/control.component";
@NgModule({
	imports: [CommonModule, ReactiveFormsModule],
	declarations: [ControlErrorComponent, ControlComponent],
	exports: [ControlComponent, ReactiveFormsModule]
})
export class ToolsModule {}
