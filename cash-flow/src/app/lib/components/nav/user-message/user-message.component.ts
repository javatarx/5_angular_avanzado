import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { StoreService } from "../../../store.service";

@Component({
	selector: "cf-user-message",
	templateUrl: "./user-message.component.html",
	styles: ["i { float: right;} "]
})
export class UserMessageComponent implements OnInit {
	public userMessage$: Observable<string>;
	constructor(private store: StoreService) {}

	ngOnInit() {
		this.userMessage$ = this.store.getUserMessage$();
	}
}
