import {
	async,
	ComponentFixture,
	TestBed
} from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { from } from "rxjs/observable/from";
import { StoreService } from "../../lib/store.service";
import { ItemComponent } from "./item/item.component";
import { ListComponent } from "./list/list.component";
import { NewComponent } from "./new/new.component";
import { Operation } from "./operation.class";
import { OperationsComponent } from "./operations.component";
import { OperationsRoutingModule } from "./operations.routing";
import { OperationsService } from "./operations.service";

describe("OperationsComponent", () => {
	let component: OperationsComponent;
	let fixture: ComponentFixture<OperationsComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [OperationsRoutingModule, ReactiveFormsModule],
				declarations: [
					ListComponent,
					OperationsComponent,
					ItemComponent,
					NewComponent
				],
				providers: [
					{
						provide: OperationsService,
						useValue: fake.operationsService
					},
					StoreService
				]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(OperationsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
	it("should save an operation", () => {
		component.saveOperation(new Operation());
		fixture.detectChanges();
		fixture.whenStable().then(result => {
			expect(component.operations.length).toBe(2);
		});
	});
	it("should delete an operation", () => {});
});
const fake = {
	operationsService: {
		operations: [new Operation()],
		getOperationsList$(d) {
			return from([this.operations]);
		},
		getNumberOfOperations$() {
			return from([{ number: this.operations.length }]);
		},
		saveOperation$(operation: Operation) {
			operation._id = Date.now().toString();
			this.operations.push(operation);
			return from([operation]);
		}
	}
};
