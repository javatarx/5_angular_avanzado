import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { IAppState } from "../../ngrx/app.state";
import { IBlockchain } from "../../ngrx/blokchain/blockchain.model";

@Component({
	selector: "cf-footer",
	templateUrl: "./footer.component.html",
	styles: []
})
export class FooterComponent implements OnInit {
	blocks$: Observable<IBlockchain[]>;

	constructor(private store: Store<IAppState>) {}

	ngOnInit() {
		this.blocks$ = this.store.select(state => state.blockchain);
	}
}
