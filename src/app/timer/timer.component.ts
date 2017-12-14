import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  // @Input() sessionLength: number;
  // @Input() breakLenght: number;

  constructor() { }

  ngOnInit() {
  }

}
