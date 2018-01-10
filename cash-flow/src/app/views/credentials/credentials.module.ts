import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CredentialsRoutingModule } from './credentials.routing';
import { CredentialsComponent } from './credentials.component';

@NgModule({
  imports: [
    CommonModule,
    CredentialsRoutingModule
  ],
  declarations: [CredentialsComponent]
})
export class CredentialsModule { }
