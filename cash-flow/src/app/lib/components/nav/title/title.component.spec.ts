import { DebugElement } from "@angular/core";
import {
	async,
	ComponentFixture,
	TestBed
} from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { TitleComponent } from "./title.component";

describe("TitleComponent", () => {
	let fixture: ComponentFixture<TitleComponent>;
	let component: TitleComponent;
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
		const aNative = aTag.nativeElement;
		const aContent = aTag.nativeElement.textContent;
		expect(aContent).toBe(component.title);
	});
});
