import {
	HTTP_INTERCEPTORS,
	HttpClientModule
} from "@angular/common/http";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { blockchainReducer } from "./blokchain/blockchain.reducer";
import { CatchInterceptorService } from "./catch-interceptor.service";
import { ComponentsModule } from "./components/components.module";
import { Slice } from "./redux/reducer";
import { userReducer } from "./redux/reducers";
import { Store } from "./redux/store";
import { StoreService } from "./store.service";
import { TokenInterceptorService } from "./token-interceptor.service";

@NgModule({
	imports: [
		ComponentsModule,
		HttpClientModule,
		StoreModule.forRoot({ blockchain: blockchainReducer })
	],
	exports: [ComponentsModule],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: TokenInterceptorService,
			multi: true
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: CatchInterceptorService,
			multi: true
		},
		StoreService,
		{
			provide: Store,
			useValue: new Store([new Slice("Users", userReducer)])
		}
	]
})
export class LibModule {}
