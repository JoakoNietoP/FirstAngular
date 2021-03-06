import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//routers module
import { AppRoutingModule } from './app.routes'

import { AppComponent } from './app.component';
import { NavComponent } from './components/navbar/navbar.component'
import { HomeComponent } from './components/home/home.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AcercaDeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
