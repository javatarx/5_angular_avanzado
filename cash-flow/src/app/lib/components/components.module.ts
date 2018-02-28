import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ControlErrorComponent } from "./control-error/control-error.component";
import { FooterComponent } from "./footer/footer.component";
import { NavComponent } from "./nav/nav.component";
import { TitleComponent } from "./nav/title/title.component";
import { UserLoginComponent } from "./nav/user-login/user-login.component";
import { UserMessageComponent } from "./nav/user-message/user-message.component";

@NgModule({
	imports: [CommonModule, RouterModule, ReactiveFormsModule],
	declarations: [
		NavComponent,
		FooterComponent,
		TitleComponent,
		UserLoginComponent,
		UserMessageComponent,
		ControlErrorComponent
	],
	exports: [
		NavComponent,
		FooterComponent,
		ControlErrorComponent
	]
})
export class ComponentsModule {}
