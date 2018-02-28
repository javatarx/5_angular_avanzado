import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";
import { LibModule } from "./lib/lib.module";
import { HomeModule } from "./views/home/home.module";
import { NotFoundModule } from "./views/not-found/not-found.module";

@NgModule({
	declarations: [AppComponent],
	imports: [
		AppRoutingModule,
		BrowserModule,
		HomeModule,
		LibModule,
		NotFoundModule,
		ServiceWorkerModule.register("/ngsw-worker.js", {
			enabled: environment.production
		})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
