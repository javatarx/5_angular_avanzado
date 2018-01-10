import { CommonModule } from '@angular/common';
import { CredentialsComponent } from './credentials.component';
import { CredentialsRoutingModule } from './credentials.routing';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [
    CommonModule,
    CredentialsRoutingModule,
    FormsModule
  ],
  declarations: [CredentialsComponent]
})
export class CredentialsModule { }
