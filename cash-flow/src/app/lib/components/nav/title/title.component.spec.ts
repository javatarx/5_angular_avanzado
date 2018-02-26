import {
	async,
	ComponentFixture,
	TestBed
} from "@angular/core/testing";
import { TitleComponent } from "./title.component";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe("TitleComponent", () => {
	let component: TitleComponent;
	let fixture: ComponentFixture<TitleComponent>;
	let componentElement: DebugElement;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [TitleComponent]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(TitleComponent);
		component = fixture.componentInstance;
		componentElement = fixture.debugElement;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});

	it("should show the title", () => {
		const aTag = componentElement.query(By.css("a"));
		const aContent = aTag.nativeElement.textContent;
		expect(aContent).toBe(component.title);
	});
});
