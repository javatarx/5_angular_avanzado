// tslint:disable-next-line:no-submodule-imports
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { environment } from "../../../environments/environment";
import { IAppState } from "../../lib/ngrx/app.state";
import { ADD_OPERATION } from "../../lib/ngrx/blokchain/blockchain.reducer";
import { Operation } from "./operation.class";

@Injectable()
export class OperationsService {
	private url = environment.apiUrl + "priv/operations/";

	constructor(
		private http: HttpClient,
		private blockchainStore: Store<IAppState>
	) {}

	public getNumberOfOperations$(): Observable<any> {
		return this.http.get(this.url + "count");
	}

	public getOperationsList$(): Observable<Operation[]> {
		return this.http.get<Operation[]>(this.url);
	}

	public getOperationById$(id: string): Observable<Operation> {
		return this.http.get<Operation>(this.url + id);
	}

	public saveOperation$(operation: Operation): Observable<any> {
		this.blockchainStore.dispatch({
			type: ADD_OPERATION,
			payload: {
				description: "Saving",
				size: JSON.stringify(operation).length
			}
		});
		return this.http.post(this.url, operation);
	}

	public deleteOperation$(
		operation: Operation
	): Observable<any> {
		this.blockchainStore.dispatch({
			type: ADD_OPERATION,
			payload: { description: "Deleting", size: 0 }
		});
		return this.http.delete(this.url + operation._id);
	}
}
