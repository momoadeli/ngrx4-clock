import { Injectable } from '@angular/core';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map'

@Injectable()
export class ClockService {
  private _ticker: Observable<number>;

  constructor() {
    this.startTicker();
  }

  startTicker(): void {
    this._ticker = TimerObservable.create(1000, 1000);
  }

  getTicker(): Observable<number> {
    return this._ticker;
  }
}
