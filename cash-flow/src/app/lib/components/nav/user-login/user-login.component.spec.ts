import {
	async,
	ComponentFixture,
	TestBed
} from "@angular/core/testing";
import { StoreService } from "../../../store.service";
import { UserLoginComponent } from "./user-login.component";

describe("UserLoginComponent", () => {
	let component: UserLoginComponent;
	let fixture: ComponentFixture<UserLoginComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [UserLoginComponent],
				providers: [StoreService]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(UserLoginComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
