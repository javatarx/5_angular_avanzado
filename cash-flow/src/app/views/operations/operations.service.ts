import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Operation } from './operation.class';

@Injectable()
export class OperationsService {
  private url = environment.apiUrl + 'priv/operations/';

  constructor(private http: HttpClient) {}

  public getNumberOfOperations$(): Observable<any> {
    return this.http.get(this.url + 'count');
  }

  public getOperationsList$(): Observable<Operation[]> {
    return this.http.get<Operation[]>(this.url);
  }

  public getOperationById$(id: string): Observable<Operation> {
    return this.http.get<Operation>(this.url + id);
  }

  public saveOperation$(operation: Operation): Observable<any> {
    return this.http.post(this.url, operation);
  }

  public deleteOperation$(operation: Operation): Observable<any> {
    return this.http.delete(this.url + operation._id);
  }
}
