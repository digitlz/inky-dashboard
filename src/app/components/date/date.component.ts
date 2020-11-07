import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  public currentDate: string;

  constructor() { }

  ngOnInit(): void {
    this.currentDate = moment().format('DD.MM.YYYY');
  }

}
