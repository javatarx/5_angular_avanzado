import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";

import { FooterComponent } from "./footer/footer.component";
import { NavComponent } from "./nav/nav.component";
import { TitleComponent } from "./nav/title/title.component";
import { UserLoginComponent } from "./nav/user-login/user-login.component";
import { UserMessageComponent } from "./nav/user-message/user-message.component";

@NgModule({
	imports: [CommonModule, RouterModule],
	declarations: [
		NavComponent,
		FooterComponent,
		TitleComponent,
		UserLoginComponent,
		UserMessageComponent
	],
	exports: [NavComponent, FooterComponent]
})
export class ComponentsModule {}
