import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ClockService } from '../clock.service';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import * as fromClockColor from '../state-management/reducers/clock-color';
import * as clockColorActions from '../state-management/actions/clock-color';
import * as fromRoot from '../../reducers';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy {

  private _clock_color;
  private _clock_color$: Observable<string>;
  private _clockServiceSubscription: Subscription;
  private _clockColorStoreSubscription: Subscription;
  private _clockDate: Date;

  constructor(
    private route: ActivatedRoute,
    private clockService: ClockService,
    private store: Store<fromRoot.State>
  ) {
    const fr = fromRoot;
    const frCC = fromRoot.getClockColor;
    this._clock_color$ = store.select(fromRoot.getClockColor);
    this._clockColorStoreSubscription =
      this._clock_color$.subscribe( (clock_color) => {
        console.log('in store subscribe' + clock_color);
        this._clock_color = clock_color;
      });
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

    this._clockServiceSubscription = this.clockService.getTimer().subscribe(
      (timer) => {
        this._clockDate = new Date();
        console.log('timer invoked: ' + this._clockDate);
      }, (error) => {
        console.log('timer error');
      }, () => {
        console.log('timer is never done');
      });
  }

  // always unsubscribe on component exit
  ngOnDestroy() {
    this._clockServiceSubscription.unsubscribe();
    // this._clockColorStoreSubscription.unsubscribe();
  }
}
