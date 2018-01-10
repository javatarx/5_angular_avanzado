import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { BusService } from './lib/bus.service';
import { CatchInterceptorService } from './lib/catch-interceptor.service';
import { ComponentsModule } from './lib/components/components.module';
import { environment } from '../environments/environment';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TokenInterceptorService } from './lib/token-interceptor.service';
import { NotFoundModule } from './views/not-found/not-found.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
    NotFoundModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    BusService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CatchInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
