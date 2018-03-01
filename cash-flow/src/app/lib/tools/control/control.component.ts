import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
	selector: "cf-control",
	templateUrl: "./control.component.html",
	styles: []
})
export class ControlComponent implements OnInit {
	@Input() formGroup: FormGroup;
	@Input() controlName: string;
	@Input() controlLabel: string;
	constructor() {}

	ngOnInit() {}
}
