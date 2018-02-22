import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CredentialsService } from './credentials.service';
import { StoreService } from '../../lib/store.service';

@Component({
  selector: 'cf-credentials',
  templateUrl: './credentials.component.html',
  styles: []
})
export class CredentialsComponent implements OnInit {
  public pageData: any;
  public errorMessage = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private credentialsService: CredentialsService,
    private router: Router,
    private store: StoreService
  ) { }

  public ngOnInit() {
    this.obtainPageDataFromRoute();
  }
  private obtainPageDataFromRoute() {
    this.pageData = this.activatedRoute.snapshot.data;
  }
  public sendCredential() {
    this.errorMessage = '';
    const credential = this.pageData.credential;
    const service = this.pageData.title;
    this.credentialsService
      .sendCredential(credential, service)
      .subscribe(this.acceptedCredentials, this.invalidCredentials);
  }
  private acceptedCredentials = responseData => {
    if (responseData && responseData.token) {
      this.store.setUserToken(responseData.token);
      this.router.navigateByUrl('/');
    } else {
      this.invalidCredentials();
    }
  }
  private invalidCredentials = () => {
    this.store.setUserToken(null);
    this.errorMessage = 'Invalid Credentials';
  }
}
