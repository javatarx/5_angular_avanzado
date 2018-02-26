import {
	async,
	ComponentFixture,
	TestBed
} from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import {} from "jasmine";
import { AppComponent } from "./app.component";
import { ComponentsModule } from "./lib/components/components.module";
import { StoreService } from "./lib/store.service";

describe("AppComponent", () => {
	let fixture: ComponentFixture<AppComponent>;
	let component: AppComponent;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [ComponentsModule, RouterTestingModule],
				declarations: [AppComponent],
				providers: [StoreService]
			}).compileComponents();
			fixture = TestBed.createComponent(AppComponent);
			component = fixture.componentInstance;
		})
	);
	beforeEach(() => {
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it(
		"should create the app",
		async(() => {
			expect(component).toBeTruthy();
		})
	);
});
