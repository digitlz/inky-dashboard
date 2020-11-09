import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {

  public currentTime: string;

  constructor() { }

  ngOnInit(): void {
    this.currentTime = moment().format('HH:mm');
  }

}
