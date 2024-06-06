import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routes";

import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ContactComponent } from "./contact/contact.component";
import { provideHttpClient } from "@angular/common/http";

@NgModule({
    bootstrap: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, FormsModule],
    providers: [provideHttpClient()],
    declarations: [AppComponent, ContactComponent]
})
export class AppModule { }