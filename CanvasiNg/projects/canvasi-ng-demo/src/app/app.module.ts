import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CanvasiNgModule } from 'canvasi-ng';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CanvasiNgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
