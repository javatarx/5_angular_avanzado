import {
	HttpClientTestingModule,
	HttpTestingController
} from "@angular/common/http/testing";
import { inject, TestBed, async } from "@angular/core/testing";
import { OperationsService } from "./operations.service";
import { Operation } from "./operation.class";

describe("OperationsService", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [OperationsService]
		});
	});
	afterEach(
		inject(
			[HttpTestingController],
			(backend: HttpTestingController) => {
				backend.verify();
			}
		)
	);
	it(
		"should be created",
		inject(
			[OperationsService],
			(service: OperationsService) => {
				expect(service).toBeTruthy();
			}
		)
	);
	it(
		"should call getNumberOfOperations",
		async(
			inject(
				[OperationsService, HttpTestingController],
				(
					service: OperationsService,
					backend: HttpTestingController
				) => {
					service.getNumberOfOperations$().subscribe();
					backend.expectOne(request => {
						return (
							request.url ===
							"https://api-base.herokuapp.com/api/priv/operations/count"
						);
					}, "getNumberOfOperations was called");
				}
			)
		)
	);
	it(
		"should call saveOperation",
		async(
			inject(
				[OperationsService, HttpTestingController],
				(
					service: OperationsService,
					backend: HttpTestingController
				) => {
					service.saveOperation$(new Operation()).subscribe();
					backend.expectOne(request => {
						return (
							request.url ===
								"https://api-base.herokuapp.com/api/priv/operations/" &&
							request.method === "POST" &&
							request.body.amount == 0
						);
					}, "getNumberOfOperations was called");
				}
			)
		)
	);
});
