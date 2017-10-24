import { RouterModule, Routes } from '@angular/router';
import { ClockComponent } from './clock/container/clock.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/container/page-not-found.component';

export const appRoutes: Routes = [
  { path: 'home', component: PageNotFoundComponent },
  { path: 'clock-store/:clock-color', component: ClockComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

