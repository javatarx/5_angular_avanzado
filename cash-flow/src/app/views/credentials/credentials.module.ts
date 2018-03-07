import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ToolsModule } from "../../lib/tools/tools.module";
import { CredentialsComponent } from "./credentials.component";
import { CredentialsRoutingModule } from "./credentials.routing";
import { CredentialsService } from "./credentials.service";
@NgModule({
	imports: [
		CommonModule,
		ToolsModule,
		CredentialsRoutingModule,
		ToolsModule
	],
	declarations: [CredentialsComponent],
	providers: [CredentialsService]
})
export class CredentialsModule {}
