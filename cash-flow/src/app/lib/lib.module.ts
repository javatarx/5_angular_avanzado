import {
	HTTP_INTERCEPTORS,
	HttpClientModule
} from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CatchInterceptorService } from "./catch-interceptor.service";
import { ComponentsModule } from "./components/components.module";
import { StoreService } from "./store.service";
import { Reducer } from "./store/reducer";
import { reducer } from "./store/reducers";
import { Store } from "./store/store";
import { TokenInterceptorService } from "./token-interceptor.service";

@NgModule({
	imports: [ComponentsModule, HttpClientModule],
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
			useValue: new Store([new Reducer("Users", reducer)])
		}
	]
})
export class LibModule {}
