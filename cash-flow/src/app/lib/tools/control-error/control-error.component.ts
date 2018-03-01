import { Component, Input, OnInit } from "@angular/core";
import {
	AbstractControl,
	FormControl,
	FormGroup,
	Validators
} from "@angular/forms";

@Component({
	selector: "cf-control-error",
	templateUrl: "./control-error.component.html",
	styles: []
})
export class ControlErrorComponent implements OnInit {
	@Input() formGroup: FormGroup;
	@Input() controlName: string;

	public errorMessage = "--";
	constructor() {}

	ngOnInit() {}

	public hasErrorsToShow() {
		this.errorMessage = "";
		const formControl = this.formGroup.controls[
			this.controlName
		];
		if (formControl) {
			if (formControl.touched && formControl.invalid) {
				this.errorMessage = this.getErrorMessage(
					formControl.errors
				);
				return true;
			}
		}
		return false;
	}

	private getErrorMessage(errors): string {
		let errorMessage = "";
		Object.keys(errors).forEach(element => {
			errorMessage += element.toString();
		});
		return errorMessage;
	}
}
