import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-nav',
  templateUrl: './nav.component.html',
  styles: [
  `
    nav{
      border-bottom: .1rem solid;
    }
  `]
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
