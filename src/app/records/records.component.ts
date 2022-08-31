import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
declare let $: any;

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {
  console = console;
  Object = Object;
  type: any;
  rank: any;
  bu: any;
  geo: any;
  start_date: any;
  end_date: any;
  currency: any;
  table_data:any;
  table_headers:any = [];
  apiType: any;
  timeframe: any;
  account: any;
  lost_reason: any;
  highestValue: any;
  tableTitle: string;
  month: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService : DataService
  ) { 
    this.activatedRoute.queryParams.subscribe(params => {
      this.bu = params.bu;
      this.geo = params.geo;
      this.start_date = params.start_date;
      this.end_date = params.end_date;
      this.currency = params.currency;
      this.type = params.type;
      this.rank = params.rank;
      this.apiType = params.api_type;
      this.timeframe = params.timeframe;
      this.account = params.account;
      this.lost_reason = params.lost_reason;
      this.highestValue = params.highestValue;
      this.month = params.month;
    })
  }

  ngOnInit(): void {

  }

}
