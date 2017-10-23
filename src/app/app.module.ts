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
import * as fromClockColor from './clock/state-management/reducers/clock-color';

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
    StoreModule.forRoot({ clock_color: fromClockColor.clockColorReducer })
  ],
  providers: [
    ClockService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
