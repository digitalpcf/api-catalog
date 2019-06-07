import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ViewclientComponent } from './components/viewclient/viewclient.component';
import { AddclientComponent } from './components/addclient/addclient.component';

// importing Services Here
import {GetclientService} from './services/getclient.service';
import {GetappdetailsService} from './services/getappdetails.service';
import { ViewAppListComponent } from './components/view-app-list/view-app-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewclientComponent,
    AddclientComponent,
    ViewAppListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [GetclientService,GetappdetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
