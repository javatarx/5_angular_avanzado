import { DebugElement } from "@angular/core";
import {
	async,
	ComponentFixture,
	TestBed
} from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { Operation } from "../operation.class";
import { NewComponent } from "./new.component";

describe("NewComponent", () => {
	let fixture: ComponentFixture<NewComponent>;
	let component: NewComponent;
	let submitEl: DebugElement;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [ReactiveFormsModule],
				declarations: [NewComponent]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(NewComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});

	fit("should call save with the form operation data", () => {
		let theFormValue;
		component.save.subscribe(value => (theFormValue = value));
		submitEl = fixture.debugElement.query(By.css("button"));
		submitEl.triggerEventHandler("click", null);
		expect(theFormValue.amount).toBe(0);
	});
});
