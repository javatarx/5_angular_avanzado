import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ComponentsModule } from "../../lib/components/components.module";
import { CredentialsComponent } from "./credentials.component";
import { CredentialsRoutingModule } from "./credentials.routing";
import { CredentialsService } from "./credentials.service";
@NgModule({
	imports: [
		CommonModule,
		ComponentsModule,
		CredentialsRoutingModule,
		ReactiveFormsModule
	],
	declarations: [CredentialsComponent],
	providers: [CredentialsService]
})
export class CredentialsModule {}
