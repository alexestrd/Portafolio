import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { TypewriterComponentComponent } from './typewriter-component/typewriter-component.component';
import { PresentationComponent } from "./component/presentation/presentation.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    TypewriterComponentComponent,
    PresentationComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
