import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './componets/user/user.component';
import {HttpClientModule} from '@angular/common/http';
import { UserCardviewComponent } from './componets/user-cardview/user-cardview.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserCardviewComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
