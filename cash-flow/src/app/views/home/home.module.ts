import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ToolsModule } from "../../lib/tools/tools.module";
import { HomeComponent } from "./home.component";

@NgModule({
	imports: [CommonModule, ToolsModule],
	declarations: [HomeComponent],
	exports: [HomeComponent]
})
export class HomeModule {}
