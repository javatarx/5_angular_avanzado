import { Component, OnInit } from "@angular/core";
import {
	FormBuilder,
	FormGroup,
	Validators
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { LoginUser } from "../../lib/redux/actions";
import { Store } from "../../lib/redux/store";
import { ValidatePassword } from "../../lib/tools/custom_validators";
import { CredentialsService } from "./credentials.service";
@Component({
	selector: "cf-credentials",
	templateUrl: "./credentials.component.html",
	styles: []
})
export class CredentialsComponent implements OnInit {
	public credentialsForm: FormGroup;

	public pageData: any;
	public errorMessage = "";

	constructor(
		private activatedRoute: ActivatedRoute,
		private credentialsService: CredentialsService,
		private router: Router,
		private formBuilder: FormBuilder,
		private store: Store
	) {}

	public ngOnInit() {
		this.obtainPageDataFromRoute();
		this.buildForm();
	}
	private obtainPageDataFromRoute() {
		this.pageData = this.activatedRoute.snapshot.data;
	}
	private buildForm() {
		this.credentialsForm = this.formBuilder.group({
			email: [
				this.pageData.credential.email,
				[Validators.required, Validators.email]
			],
			password: [
				this.pageData.credential.password,
				[
					Validators.required,
					Validators.minLength(4),
					ValidatePassword
				]
			]
		});
	}
	public sendCredential() {
		this.errorMessage = "";
		const credential = this.credentialsForm.value;
		const service = this.pageData.title;
		this.credentialsService
			.sendCredential(credential, service)
			.subscribe(
				this.acceptedCredentials,
				this.invalidCredentials
			);
	}
	private acceptedCredentials = responseData => {
		if (responseData && responseData.token) {
			this.store.dispatch(new LoginUser(responseData.token));
			this.router.navigateByUrl("/");
		} else {
			this.store.dispatch(new LoginUser(null));
			this.invalidCredentials();
		}
	};
	private invalidCredentials = () => {
		this.store.dispatch(new LoginUser(null));
		this.errorMessage = "Invalid Credentials";
	};
}
