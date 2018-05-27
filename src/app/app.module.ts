import { ServiceHandler } from './services/service.handler';
import { HttpClient } from './services/http.client';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './pages/app.component';
import { TreeViewComponent } from './components/treeview/treeview.component';
import { EmployeeFactory } from './services/employeeFactory';

@NgModule({
  declarations: [
    AppComponent,
    TreeViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    HttpClient,
    ServiceHandler,
    EmployeeFactory
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
