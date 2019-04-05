import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './root/header/header.component';
import { NavPillsComponent } from './root/nav-pills/nav-pills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavPillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
