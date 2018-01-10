import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { BusService } from './lib/bus.service';
import { CatchInterceptorService } from './lib/catch-interceptor.service';
import { ComponentsModule } from './lib/components/components.module';
import { environment } from '../environments/environment';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TokenInterceptorService } from './lib/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ComponentsModule,
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
  exports: [NotFoundComponent]
})
export class AppModule { }
