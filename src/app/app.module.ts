import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { TypewriterComponentComponent } from './typewriter-component/typewriter-component.component';
import { PresentationComponent } from "./component/presentation/presentation.component";
import { ProjectsComponent } from './component/projects/projects.component';
import { StackComponent } from './components/stack/stack.component';
import { ExperienceComponent } from './components/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    TypewriterComponentComponent,
    PresentationComponent,
    ProjectsComponent,
    StackComponent,
    ExperienceComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
