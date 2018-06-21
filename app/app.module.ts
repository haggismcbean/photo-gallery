import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, NativeScriptUIListViewModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
