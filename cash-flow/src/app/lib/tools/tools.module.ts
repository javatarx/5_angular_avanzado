import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from "@angular/forms";
import {
	MatButtonModule,
	MatCardModule,
	MatDividerModule,
	MatFormField,
	MatFormFieldModule,
	MatIconModule,
	MatInputModule,
	MatMenuModule,
	MatSelectModule,
	MatTableModule,
	MatToolbarModule
} from "@angular/material";
import { ControlErrorComponent } from "./control-error/control-error.component";
import { ControlComponent } from "./control/control.component";

@NgModule({
	declarations: [ControlErrorComponent, ControlComponent],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		FlexLayoutModule,
		MatButtonModule,
		MatCardModule,
		MatFormFieldModule,
		MatIconModule,
		MatMenuModule,
		MatToolbarModule,
		MatInputModule,
		MatSelectModule,
		MatTableModule,
		MatDividerModule
	],
	exports: [
		ControlComponent,
		ReactiveFormsModule,
		FlexLayoutModule,
		MatButtonModule,
		MatCardModule,
		MatFormFieldModule,
		MatIconModule,
		MatMenuModule,
		MatToolbarModule,
		MatInputModule,
		MatSelectModule,
		MatTableModule,
		MatDividerModule
	]
})
export class ToolsModule {}
