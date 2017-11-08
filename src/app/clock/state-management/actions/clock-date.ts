import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

export const GET_CLOCK_TICKER = '[CLOCK DATE] get ticker';
export const CLOCK_TICK = '[CLOCK DATE] clock tick';
export const CLOCK_TICK_ERROR = '[CLOCK DATE] clock tick';

export class GetClockTicker implements Action {
  readonly type = GET_CLOCK_TICKER;

  constructor(public payload: Observable<number>) {}
}

export class ClockTick implements Action {
  readonly type = CLOCK_TICK;

  constructor(public payload: number) {}
}

export class ClockTickError implements Action {
    readonly type = CLOCK_TICK_ERROR;

    constructor(public payload: any) {}
  }

export type Actions = GetClockTicker | ClockTick;

