import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConceitosIniciaisComponent } from './conceitos-iniciais/conceitos-iniciais.component';

@NgModule({
  declarations: [
    AppComponent,
    ConceitosIniciaisComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
