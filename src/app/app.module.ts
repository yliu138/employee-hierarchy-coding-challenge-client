import { TreeViewModule } from './components/treeview/treeview.moule';
import { ServiceHandler } from './services/service.handler';
import { HttpClient } from './services/http.client';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './pages/app.component';
import { TreeViewComponent } from './components/treeview/treeview.component';
import { EmployeeFactory } from './services/employeeFactory';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TreeViewModule
  ],
  providers: [
    HttpClient,
    ServiceHandler,
    EmployeeFactory
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
