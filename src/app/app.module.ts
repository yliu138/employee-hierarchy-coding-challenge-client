import { ServiceHandler } from './services/service.handler';
import { HttpClient } from './services/http.client';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './pages/app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    HttpClient,
    ServiceHandler
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
