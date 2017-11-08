import { Injectable } from '@angular/core';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map'

@Injectable()
export class ClockService {
  private _timer: Observable<number>;

  constructor() {
    this.startTimer();
  }

  startTimer(): void {
    this._timer = TimerObservable.create(1000, 1000);
    // this._subscription = timer.subscribe( (t) => {
    //   this._tick = t;
    // });
  }

  getTicker(): Observable<number> {
    return this._timer;
  }
}
