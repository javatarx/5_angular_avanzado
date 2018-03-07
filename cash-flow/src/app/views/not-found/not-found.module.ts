import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NotFoundComponent } from "./not-found.component";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
	imports: [CommonModule, RouterModule, FlexLayoutModule],
	declarations: [NotFoundComponent],
	exports: [NotFoundComponent]
})
export class NotFoundModule {}
