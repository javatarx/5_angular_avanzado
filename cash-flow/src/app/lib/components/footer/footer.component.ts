import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { IAppState } from "../../blokchain/app.state";
import { IBlockchain } from "../../blokchain/blockchain.model";

@Component({
	selector: "cf-footer",
	templateUrl: "./footer.component.html",
	styles: [
		`
  footer{
    border-top: .1rem solid;
    text-align: center;
  }
`
	]
})
export class FooterComponent implements OnInit {
	blocks$: Observable<IBlockchain[]>;

	constructor(private store: Store<IAppState>) {}

	ngOnInit() {
		this.blocks$ = this.store.select(state => state.blockchain);
	}
}
