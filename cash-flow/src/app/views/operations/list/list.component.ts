import {
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output
} from "@angular/core";
import { Operation } from "../operation.class";

@Component({
	selector: "cf-list",
	templateUrl: "./list.component.html",
	styles: []
})
export class ListComponent implements OnInit {
	@Input() public numberOfOperations = 0;
	@Input() public operations: Operation[] = [];
	@Output() public delete = new EventEmitter<Operation>();

	public title = "List of Operations";
	constructor() {}

	public ngOnInit() {}

	public deleteOperation(operation: Operation) {
		this.delete.emit(operation);
	}
}
