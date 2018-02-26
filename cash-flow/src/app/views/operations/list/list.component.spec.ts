import { APP_BASE_HREF } from "@angular/common";
import {
	async,
	ComponentFixture,
	TestBed
} from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ItemComponent } from "../item/item.component";
import { NewComponent } from "../new/new.component";
import { OperationsComponent } from "../operations.component";
import { OperationsRoutingModule } from "../operations.routing";
import { ListComponent } from "./list.component";

describe("ListComponent", () => {
	let fixture: ComponentFixture<ListComponent>;
	let component: ListComponent;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [
					OperationsRoutingModule,
					FormsModule,
					RouterModule.forRoot([
						{ path: "", redirectTo: "", pathMatch: "full" }
					])
				],
				declarations: [
					ListComponent,
					OperationsComponent,
					ItemComponent,
					NewComponent
				],
				providers: [{ provide: APP_BASE_HREF, useValue: "/" }]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(ListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});

	it("should show an empty list for zero operations ", () => {
		component.numberOfOperations = 0;
		fixture.detectChanges();
		const tableEl = fixture.debugElement.query(By.css("table"));
		expect(tableEl).toBe(null);
		const panelEl = fixture.debugElement.query(By.css("h3"));
		expect(panelEl).toBeTruthy();
	});

	it("should show a table with one row for each operation ", () => {
		component.numberOfOperations = 1;
		fixture.detectChanges();
		const tableEl = fixture.debugElement.query(By.css("table"));
		expect(tableEl).toBeTruthy();
		const panelEl = fixture.debugElement.query(By.css("h3"));
		expect(panelEl).toBe(null);
	});

	it("should emit an event when user click on delete ", () => {
		component.operations = [
			{ _id: "", description: "", amount: 1, kind: "" }
		];
		component.numberOfOperations = 1;
		fixture.detectChanges();
		let theOperation;
		component.delete.subscribe(value => (theOperation = value));
		const deleteEl = fixture.debugElement.query(
			By.css("tbody > tr:first-child > td:last-child > button")
		);
		deleteEl.triggerEventHandler("click", null);
		expect(theOperation.amount).toBe(
			component.operations[0].amount
		);
	});
});
