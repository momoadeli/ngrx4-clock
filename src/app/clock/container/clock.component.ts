import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClockService } from '../clock.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy {

  private clock_color = 'Red';
  private _subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private clockService: ClockService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.clock_color = params['clock-color'];

      // In a real app: dispatch action to load the details here.
    });

    this._subscription = this.clockService.getTimer().subscribe( 
      (timer) => {
      console.log('timer invoked: ' + timer)
      }, (error) => {
      console.log('timer error')
      }, () => {
        console.log('timer is never done');
      });
  }

  // always unsubscribe on component exit
  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}
