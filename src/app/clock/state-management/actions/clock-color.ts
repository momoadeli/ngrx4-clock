import { Action } from '@ngrx/store';

export const SET_RED = 'red';
export const SET_BLUE = 'blue';

export class SetRed implements Action {
  readonly type = SET_RED;
}

export class SetBlue implements Action {
  readonly type = SET_BLUE;
}

export type Actions = SetRed | SetBlue;
