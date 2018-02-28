import { Component, Input, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

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
		return true;
	}
}
