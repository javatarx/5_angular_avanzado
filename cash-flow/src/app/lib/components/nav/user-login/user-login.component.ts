import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BusService } from '../../../bus.service';

@Component({
  selector: 'cf-user-login',
  templateUrl: './user-login.component.html',
  styles: []
})
export class UserLoginComponent implements OnInit {
  public userIsAnonymous$: Observable<boolean>;

  constructor(private busService: BusService) { }

  ngOnInit() {
    this.userIsAnonymous$ = this.busService.getUserIsAnonymous$();
  }

}
