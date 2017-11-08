import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import { ClockService } from '../../clock.service';
import * as clockDateActions from '../actions/clock-date';

@Injectable()
export class AuthEffects {
  @Effect()
  login$ = this.actions$
    .ofType(clockDateActions.GET_CLOCK_TICKER)
    .map((action: clockDateActions.GetClockTicker) => {
        return action.payload;
    })
    .exhaustMap(ticker =>
      this.clockService
        .getTicker()    // get reference to ticker Observable<number>
        .map( (tick) => { 
            return new clockDateActions.ClockTick(tick);
        })
        .catch(error => of(new clockDateActions.ClockTickError(error)))
    );

  constructor(
    private actions$: Actions,
    private clockService: ClockService
  ) {}
}
