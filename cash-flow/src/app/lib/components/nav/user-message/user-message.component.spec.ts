import {
	async,
	ComponentFixture,
	TestBed
} from "@angular/core/testing";
import { StoreService } from "../../../store.service";
import { UserMessageComponent } from "./user-message.component";

describe("UserMessageComponent", () => {
	let fixture: ComponentFixture<UserMessageComponent>;
	let component: UserMessageComponent;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [UserMessageComponent],
				providers: [StoreService]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(UserMessageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
