import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavComponent } from './components/parts/nav/nav.component';
import { MeComponent } from './components/parts/me/me.component';
import { CopyComponent } from './components/parts/copy/copy.component';
import { AboutComponent } from './components/parts/about/about.component';
import { ExperienceComponent } from './components/parts/experience/experience.component';
import { CardComponent } from './components/parts/card/card.component';
import { InfoComponent } from './components/parts/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavComponent,
    MeComponent,
    CopyComponent,
    AboutComponent,
    ExperienceComponent,
    CardComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
