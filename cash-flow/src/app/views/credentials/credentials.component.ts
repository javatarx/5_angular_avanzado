import { ActivatedRoute, Router } from '@angular/router';
import { BusService } from '../../lib/bus.service';
import { Component, OnInit } from '@angular/core';
import { CredentialsService } from './credentials.service';

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
    private busService: BusService,
    private credentialsService: CredentialsService,
    private router: Router
  ) {}

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
      .subscribe(
        this.acceptedCredentials.bind(this),
        this.invalidCredentials.bind(this)
      );
  }
  private acceptedCredentials(token) {
    this.busService.emitUserToken(token);
    this.router.navigateByUrl('/');
  }
  private invalidCredentials() {
    this.busService.emitUserToken(null);
    this.errorMessage = 'Invalid Credentials';
  }
}
