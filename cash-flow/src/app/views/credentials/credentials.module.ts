import { CommonModule } from '@angular/common';
import { CredentialsComponent } from './credentials.component';
import { CredentialsRoutingModule } from './credentials.routing';
import { CredentialsService } from './credentials.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [
    CommonModule,
    CredentialsRoutingModule,
    FormsModule
  ],
  declarations: [CredentialsComponent],
  providers: [
    CredentialsService
  ]
})
export class CredentialsModule { }
