import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { TypewriterComponentComponent } from './typewriter-component/typewriter-component.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    TypewriterComponentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
