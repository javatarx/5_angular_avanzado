import {
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output
} from "@angular/core";
import {
	FormBuilder,
	FormGroup,
	Validators
} from "@angular/forms";
import { Operation } from "../operation.class";

@Component({
	selector: "cf-new",
	templateUrl: "./new.component.html",
	styles: []
})
export class NewComponent implements OnInit {
	@Input() public numberOfOperations = 0;
	@Output() public save = new EventEmitter<Operation>();

	public operationsForm: FormGroup;
	public kindsOfOperations = ["Income", "Expense"];
	public title = "New Operation";

	constructor(private formBuilder: FormBuilder) {}

	public ngOnInit() {
		this.buildForm();
	}
	private buildForm() {
		this.operationsForm = this.formBuilder.group({
			description: [
				"",
				[Validators.required, Validators.minLength(3)]
			],
			amount: [0, [Validators.required, Validators.min(0)]],
			kind: this.kindsOfOperations[0]
		});
	}
	public saveOperation() {
		this.save.emit(this.operationsForm.value);
		this.operationsForm.reset();
	}
}
