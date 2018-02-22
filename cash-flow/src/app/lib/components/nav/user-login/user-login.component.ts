import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { StoreService } from '../../../store.service';

@Component({
  selector: 'cf-user-login',
  templateUrl: './user-login.component.html',
  styles: []
})
export class UserLoginComponent implements OnInit {
  public userIsAnonymous$: Observable<boolean>;

  constructor(private store: StoreService) { }

  ngOnInit() {
    this.userIsAnonymous$ = this.store.getUserIsAnonymous$();
  }

}
