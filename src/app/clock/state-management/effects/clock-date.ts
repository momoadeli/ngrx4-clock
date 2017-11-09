import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions } from '@ngrx/effects';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';

import { ClockService } from '../../clock.service';
import * as clockDateActions from '../actions/clock-date';

@Injectable()
export class ClockEffects {
  @Effect()
  clockTimer$ = this.actions$
    .ofType(clockDateActions.GET_CLOCK_TICKER)
    // or mergeMap whose is alias for flatMap...can use exhaustMap 
    // alias for flatMapFirst, ..results are the same
    .switchMap( (clockTicker) => { // clockTimer's an Action type but we're not doing anything with it
      return this.clockService
          .getTicker()    // get reference to ticker Observable<number>
          .map( (tick) => { 
              return new clockDateActions.ClockTick(tick);
          })
          .catch(error => of(new clockDateActions.ClockTickError(error)))
    });

  constructor(
    private actions$: Actions,
    private clockService: ClockService
  ) {}
}
