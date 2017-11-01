import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { ClockComponent } from './clock/container/clock.component';
import { PageNotFoundComponent } from './page-not-found/container/page-not-found.component';
import { ClockService } from './clock/clock.service';
import { ClockWidgetComponent } from './clock/widget-components/clock-widget/clock-widget.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers'; // from index.js!
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PageNotFoundWidgetComponent } from './page-not-found/widget-components/page-not-found-widget/page-not-found-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    PageNotFoundComponent,
    ClockWidgetComponent,
    PageNotFoundWidgetComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    StoreModule.forRoot( reducers ),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    })
  ],
  providers: [
    ClockService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
