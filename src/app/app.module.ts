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
import { reducers } from './reducers';
@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    PageNotFoundComponent,
    ClockWidgetComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    StoreModule.forRoot( reducers )
  ],
  providers: [
    ClockService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
