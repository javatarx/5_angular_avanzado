import { TestBed, inject, async } from "@angular/core/testing";

import { CredentialsService } from "./credentials.service";
import {
	HttpClientTestingModule,
	HttpTestingController
} from "@angular/common/http/testing";

describe("CredentialsService", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [CredentialsService]
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
			[CredentialsService],
			(service: CredentialsService) => {
				expect(service).toBeTruthy();
			}
		)
	);

	it(
		"should use a correct url",
		async(
			inject(
				[CredentialsService, HttpTestingController],
				(
					service: CredentialsService,
					backend: HttpTestingController
				) => {
					service.sendCredential({}, "Login").subscribe();
					backend.expectOne(request => {
						return request.url.endsWith("login");
					}, "sendCredential was well called");
				}
			)
		)
	);

	it(
		"should send the credential",
		async(
			inject(
				[CredentialsService, HttpTestingController],
				(
					service: CredentialsService,
					backend: HttpTestingController
				) => {
					service
						.sendCredential(
							{ email: "test@verified.com" },
							"Login"
						)
						.subscribe();
					backend.expectOne(request => {
						return request.body.email === "test@verified.com";
					}, "sendCredential was well called");
				}
			)
		)
	);
});
