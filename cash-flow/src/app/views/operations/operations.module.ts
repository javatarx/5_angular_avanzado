import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ItemComponent } from "./item/item.component";
import { ListComponent } from "./list/list.component";
import { NewComponent } from "./new/new.component";
import { OperationsComponent } from "./operations.component";
import { OperationsRoutingModule } from "./operations.routing";
import { OperationsService } from "./operations.service";
import { ToolsModule } from "../../lib/tools/tools.module";

@NgModule({
	imports: [CommonModule, ToolsModule, OperationsRoutingModule],
	declarations: [
		ItemComponent,
		ListComponent,
		NewComponent,
		OperationsComponent
	],
	providers: [OperationsService]
})
export class OperationsModule {}
