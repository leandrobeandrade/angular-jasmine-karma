import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatDialogModule } from "@angular/material/dialog";

import { AppComponent } from './app.component';
import { InitConceptsComponent } from './init-concepts/init-concepts.component';
import { FixProblemsComponent } from './fix-problems/fix-problems.component';
import { StubComponent } from './stub/stub.component';
import { DebuggerComponent } from './debugger/debugger.component';
import { MatchersComponent } from './matchers/matchers.component';
import { SpyonComponent } from './spyon/spyon.component';
import { RequestComponent } from './request/request.component';

@NgModule({
  declarations: [
    AppComponent,
    InitConceptsComponent,
    FixProblemsComponent,
    StubComponent,
    DebuggerComponent,
    MatchersComponent,
    SpyonComponent,
    RequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
