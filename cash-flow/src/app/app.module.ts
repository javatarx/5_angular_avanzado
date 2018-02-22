import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NotFoundModule } from './views/not-found/not-found.module';
import { LibModule } from './lib/lib.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    LibModule,
    NotFoundModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
