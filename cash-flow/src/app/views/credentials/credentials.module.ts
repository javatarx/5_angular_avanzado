import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CredentialsComponent } from "./credentials.component";
import { CredentialsRoutingModule } from "./credentials.routing";
import { CredentialsService } from "./credentials.service";
@NgModule({
	imports: [
		CommonModule,
		CredentialsRoutingModule,
		ReactiveFormsModule
	],
	declarations: [CredentialsComponent],
	providers: [CredentialsService]
})
export class CredentialsModule {}
