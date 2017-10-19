import { RouterModule, Routes } from '@angular/router';
import { ClockComponent } from './clock/container/clock.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

export const appRoutes: Routes = [
  // { path: 'red-clock', component: ClockComponent },
  // { path: 'blue-clock', component: ClockComponent },
  { path: 'home', component: ClockComponent },
  { path: 'clock-store/:clock-color', component: ClockComponent },
//   {
//     path: 'heroes',
//     component: HeroListComponent,
//     data: { title: 'Heroes List' }
//   },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

