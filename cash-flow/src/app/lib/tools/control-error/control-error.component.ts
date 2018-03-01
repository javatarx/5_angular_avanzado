import { Component, Input, OnInit } from "@angular/core";
import {
	AbstractControl,
	FormControl,
	Validators
} from "@angular/forms";

@Component({
	selector: "cf-control-error",
	templateUrl: "./control-error.component.html",
	styles: []
})
export class ControlErrorComponent implements OnInit {
	@Input() formControl: FormControl;

	public errorMessage = "--";
	constructor() {}

	ngOnInit() {}

	public hasErrorsToShow() {
		this.errorMessage = "";
		if (this.formControl) {
			if (
				this.formControl.touched &&
				this.formControl.invalid
			) {
				this.errorMessage = this.getErrorMessage(
					this.formControl.errors
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
