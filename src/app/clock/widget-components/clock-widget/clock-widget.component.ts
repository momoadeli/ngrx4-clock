import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-clock-widget',
  templateUrl: './clock-widget.component.html',
  styleUrls: ['./clock-widget.component.css']
})
export class ClockWidgetComponent implements OnInit, OnChanges {
  @Input() clockColor: string;
  @Input() clock: Date;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log('updated inputs: ' + this.clockColor);
  }
}
