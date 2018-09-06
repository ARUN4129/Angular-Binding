import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';   //This is for ngModel...


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule     //  add this module in imports.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
