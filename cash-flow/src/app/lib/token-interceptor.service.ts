import {
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { StoreService } from "./store.service";
import { Store } from "./store/store";

@Injectable()
export class TokenInterceptorService
	implements HttpInterceptor {
	private token = "";

	constructor(private store: StoreService, private st: Store) {
		this.subscribeToTokenChanges();
	}

	private subscribeToTokenChanges() {
		this.st.subscribe(this.setToken);
	}

	private setToken = payload =>
		(this.token = payload.Users.token);

	public intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		const authorizationReq = this.setAuthHeader(req);
		const handledRequest = next.handle(authorizationReq);
		return handledRequest;
	}
	private setAuthHeader(
		req: HttpRequest<any>
	): HttpRequest<any> {
		const authToken = `Bearer ${this.token}`;
		const headers = req.headers.set("Authorization", authToken);
		const authorizedReq = req.clone({ headers });
		return authorizedReq;
	}
}
