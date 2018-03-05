import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "../../../store/store";

@Component({
	selector: "cf-user-login",
	templateUrl: "./user-login.component.html",
	styles: []
})
export class UserLoginComponent implements OnInit {
	public userIsAnonymous: boolean;

	constructor(private store: Store) {}

	ngOnInit() {
		this.store.subscribe(this.setUserIsAnonymous);
	}
	private setUserIsAnonymous = payload =>
		(this.userIsAnonymous = payload.Users.isAnonymous);
}
