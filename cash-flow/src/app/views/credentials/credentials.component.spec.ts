import {
	async,
	ComponentFixture,
	TestBed
} from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { from } from "rxjs/observable/from";
import { _throw } from "rxjs/observable/throw";
import { StoreService } from "../../lib/store.service";
import { CredentialsComponent } from "./credentials.component";
import { CredentialsRoutingModule } from "./credentials.routing";
import { CredentialsService } from "./credentials.service";

describe("CredentialsComponent", () => {
	let component: CredentialsComponent;
	let fixture: ComponentFixture<CredentialsComponent>;
	let debugElement;
	let spy: any;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [
					CredentialsRoutingModule,
					FormsModule,
					RouterTestingModule
				],
				declarations: [CredentialsComponent],
				providers: [
					{
						provide: ActivatedRoute,
						useValue: fake.activatedRoute
					},
					{
						provide: StoreService,
						useValue: fake.storeService
					},
					{
						provide: CredentialsService,
						useValue: fake.credentialsService
					}
				]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(CredentialsComponent);
		component = fixture.componentInstance;
		debugElement = fixture.debugElement;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});

	it("should obtain Page Data", () => {
		expect(component.pageData.title).toBe(
			fake.registrationData.title
		);
	});

	it("should show Page Data", () => {
		const submitEl = fixture.debugElement.query(
			By.css("button")
		);
		expect(submitEl).toBeTruthy();
		const submitNative = submitEl.nativeElement;
		expect(submitNative.textContent).toContain(
			fake.registrationData.title
		);
	});

	it("should send credentials", () => {
		spy = spyOn(component, "sendCredential");
		const submitEl = fixture.debugElement.query(
			By.css("button")
		);
		const submitNative = submitEl.nativeElement;
		submitNative.click();
		fixture.detectChanges();
		expect(spy.calls.any()).toBe(true, "sendCredential called");
	});

	it("should process correct credentials", () => {
		const submitEl = fixture.debugElement.query(
			By.css("button")
		);
		const submitNative = submitEl.nativeElement;
		submitNative.click();
		fixture.detectChanges();
		expect(component).toBeTruthy();
	});

	it("should process invalid credentials", () => {
		component.pageData.credential.email = "hacker@evil.com";
		const submitEl = fixture.debugElement.query(
			By.css("button")
		);
		const submitNative = submitEl.nativeElement;
		submitNative.click();
		fixture.detectChanges();
		expect(component.errorMessage).toBe("Invalid Credentials");
	});
});
const fake = {
	registrationData: {
		alternate: "LogIn",
		credential: { email: "", password: "" },
		title: "Registration"
	},
	loginData: {
		alternate: "Registration",
		credential: {
			email: "admin@api-base.com",
			password: "1234"
		},
		title: "LogIn"
	},
	activatedRoute: {
		snapshot: {
			data: {
				alternate: "LogIn",
				credential: { email: "", password: "" },
				title: "Registration"
			}
		}
	},
	credentialsService: {
		sendCredential(credential, service) {
			if (credential.email !== "hacker@evil.com") {
				console.log("from([{ token: fake }]");
				return from([{ token: "fake" }]);
			} else {
				console.log("_throw(invalid)");
				return _throw("invalid");
			}
		}
	},
	storeService: {
		setUserToken(token) {
			console.log("setUserToken", token);
		}
	}
};
