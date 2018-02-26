import {
	async,
	ComponentFixture,
	TestBed
} from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { from } from "rxjs/observable/from";
import { Operation } from "../operation.class";
import { OperationsService } from "../operations.service";
import { ItemComponent } from "./item.component";

describe("ItemComponent", () => {
	let component: ItemComponent;
	let fixture: ComponentFixture<ItemComponent>;

	beforeEach(
		async(() => {
			const bed = TestBed.configureTestingModule({
				declarations: [ItemComponent],
				providers: [
					{
						provide: ActivatedRoute,
						useValue: fake.activatedRoute
					},
					{
						provide: OperationsService,
						useValue: fake.operationsService
					}
				]
			});
			bed.compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(ItemComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
	it("should call getItem with the correct id", () => {
		expect(component.operation.amount).toBe(
			fake.operation.amount
		);
	});
});

const fake = {
	activatedRoute: {
		snapshot: { params: { id: 1 } }
	},
	operationsService: {
		getOperationById$(id) {
			return from([new Operation()]);
		}
	},
	operation: new Operation()
};
