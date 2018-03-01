import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ControlErrorComponent } from "./control-error/control-error.component";
@NgModule({
	imports: [CommonModule, ReactiveFormsModule],
	declarations: [ControlErrorComponent],
	exports: [ControlErrorComponent, ReactiveFormsModule]
})
export class ToolsModule {}
