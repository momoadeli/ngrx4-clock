import { RouterModule, Routes } from '@angular/router';
import { ClockComponent } from './clock/clock.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

export const appRoutes: Routes = [
  { path: 'red-clock', component: ClockComponent },
  { path: 'blue-clock', component: ClockComponent },
//   {
//     path: 'heroes',
//     component: HeroListComponent,
//     data: { title: 'Heroes List' }
//   },
  { path: '',
    redirectTo: '/clock-store',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];