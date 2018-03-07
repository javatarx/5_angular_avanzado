import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ToolsModule } from "../../lib/tools/tools.module";
import { NotFoundComponent } from "./not-found.component";

@NgModule({
	imports: [CommonModule, RouterModule, ToolsModule],
	declarations: [NotFoundComponent],
	exports: [NotFoundComponent]
})
export class NotFoundModule {}
