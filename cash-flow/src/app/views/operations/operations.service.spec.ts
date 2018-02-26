import {
	HttpClientTestingModule,
	HttpTestingController
} from "@angular/common/http/testing";
import { async, inject, TestBed } from "@angular/core/testing";
import { Operation } from "./operation.class";
import { OperationsService } from "./operations.service";

describe("OperationsService", () => {
	const url =
		"https://api-base.herokuapp.com/api/priv/operations/";
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
					backend.expectOne(
						request => request.url === url + "count",
						"getNumberOfOperations was called"
					);
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
							request.url === url &&
							request.method === "POST" &&
							request.body.amount === 0
						);
					}, "getNumberOfOperations was called");
				}
			)
		)
	);
});
