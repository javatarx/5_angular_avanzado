import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-title',
  templateUrl: './title.component.html',
  styles: []
})
export class TitleComponent implements OnInit {
  public title = 'Cash Flow';

  constructor() { }

  ngOnInit() {
  }

}
