import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ClockService } from '../clock.service';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import * as fromClockColor from '../state-management/reducers/clock-color';

interface AppState {
  clock_color: string;
}

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
    private store: Store<AppState>
  ) {
    this._clock_color$ = store.select('clock_color');
    this._clockColorStoreSubscription = this._clock_color$.subscribe( (clock_color) => {
      console.log('in store subscribe' + clock_color);
      this._clock_color = clock_color;
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // this._clock_color = params['clock-color'];

      // In a real app: dispatch action to load the details here:
      if (params['clock-color']) {
        this.store.dispatch({ type: params['clock-color'] });
      }
      else {
        this.store.dispatch({ type: '' });
      }
    });

    this._clockServiceSubscription = this.clockService.getTimer().subscribe(
      (timer) => {
        this._clockDate = new Date();
        console.log('timer invoked: ' + this._clockDate)
      }, (error) => {
        console.log('timer error')
      }, () => {
        console.log('timer is never done');
      });
  }

  // always unsubscribe on component exit
  ngOnDestroy() {
    this._clockServiceSubscription.unsubscribe();
    this._clockColorStoreSubscription.unsubscribe();
  }
}
