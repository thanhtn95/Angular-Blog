import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRouting} from './app-routing.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AppRouting, RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
