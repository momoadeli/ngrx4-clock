import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ClockService } from '../clock.service';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import * as fromClockColor from '../state-management/reducers/clock-color';
import * as clockColorActions from '../state-management/actions/clock-color';
import * as clockDateActions from '../state-management/actions/clock-date';
import * as fromRoot from '../../reducers';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy {

  private _clock_color: string;
  private _clock_color$: Observable<string>;
  private _clock_date$: Observable<Date>;
  private _clockServiceSubscription: Subscription;
  private _clockColorSubscription: Subscription;
  private _clockDateSubscription: Subscription;  
  private _clockDate: Date;

  constructor(
    private route: ActivatedRoute,
    private clockService: ClockService,
    private store: Store<fromRoot.State>
  ) {
    this.store.dispatch(new clockDateActions.GetClockTicker());
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['clock-color'] === 'blue') {
        this.store.dispatch(new clockColorActions.SetBlue());
      } else if (params['clock-color'] === 'red') {
        this.store.dispatch(new clockColorActions.SetRed());
      } else {
        // do something else...up to you
      }
    });

    this._clock_color$ = this.store.select(fromRoot.getClockColor);
    // don't need to subscribe if using asyn pipe in html:
    this._clockColorSubscription =
      this._clock_color$.subscribe( (clock_color) => {
        console.log('in store subscribe' + clock_color);
        this._clock_color = clock_color;
      });

      this._clock_date$ = this.store.select(fromRoot.getClockDate);
      this._clockDateSubscription =
      this._clock_date$.subscribe( (clock_date) => {
        console.log('in store subscribe' + clock_date);
        this._clockDate = clock_date;
      });
    // this._clockServiceSubscription = this.clockService.getTicker().subscribe(
    //   (ticker) => {
    //     this._clockDate = new Date();
    //     console.log('ticker invoked: ' + this._clockDate);
    //   }, (error) => {
    //     console.log('ticker error');
    //   }, () => {
    //     console.log('ticker is never done');
    //   });
  }

  // always unsubscribe on component exit
  ngOnDestroy() {
    console.log('unsubscribe from observables');
    // this._clockServiceSubscription.unsubscribe();
    this._clockColorSubscription.unsubscribe();
    this._clockDateSubscription.unsubscribe();
  }
}
