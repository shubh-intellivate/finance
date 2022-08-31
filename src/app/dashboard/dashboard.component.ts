import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';
import Drilldown from 'highcharts/modules/drilldown';
import { DataService } from '../services/data.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {FormGroup, FormControl} from '@angular/forms';
Drilldown(Highcharts);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild("bu") bu: ElementRef;
  @ViewChild("geo") geo: ElementRef;
  @ViewChild("timeframe") timeframe: ElementRef;
  @ViewChild("currency") currency: ElementRef;
  @ViewChild("togglePl") togglePl: ElementRef;
  // base_url: any = "http://88.218.92.164/";
  base_url: any = "http://localhost:4201/";
  timeFilter: any="Annual";
  buFilter: any="All BU";
  pl_chart_order: any;
  pl_chart_sales: any;
  pl_chart_gp: any;
  hide_pl_chart_op_ex_issc: boolean = false;
  hide_pl_chart_op_inc_issc: boolean = true;
  pl_chart_op_ex_issc: any;
  pl_chart_op_inc_issc: any;
  order_analysis_chart: any;
  sales_analysis_chart: any;
  currentBC: any = 9;
  blur: any = '';
  orderAnalysisModal: any="none";
  salesAnalysisModal: any="none";
  sgaTrendModal: any="none";
  chart_net_inventory: any;
  chart_non_moving_inventory: any;
  sgaCategoryTitle: any;

  constructor(
    private dataService : DataService
  ){ }
  

  ngOnInit() {
    this.plChart();
    this.orderAnalysisChart();
    this.salesAnalysisChart();
    this.inventoryChart();
  }

  ngAfterViewInit(){
    this.pl_chart_order.reflow();
    this.pl_chart_sales.reflow();
    this.pl_chart_gp.reflow();
    this.pl_chart_op_ex_issc.reflow();
    this.pl_chart_op_inc_issc.reflow();
    this.order_analysis_chart.reflow();
    this.sales_analysis_chart.reflow();
    this.chart_net_inventory.reflow();
    this.chart_non_moving_inventory.reflow();
  }

  showTab(evt, cityName) {
    const tabs = Array.from(
      document.getElementsByClassName('tabs') as HTMLCollectionOf<HTMLElement>,
    );
    const tablinks = Array.from(
      document.getElementsByClassName("tablink") as HTMLCollectionOf<HTMLElement>,
    );
    tabs.forEach(tab => {
      tab.style.display = 'none';
    });
    tablinks.forEach(tablink => {
      tablink.className = tablink.className.replace(" w3-grey", "");
    });
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " w3-grey";

    this.pl_chart_order.reflow();
    this.pl_chart_sales.reflow();
    this.pl_chart_gp.reflow();
    this.pl_chart_op_ex_issc.reflow();
    this.pl_chart_op_inc_issc.reflow();
    this.order_analysis_chart.reflow();
    this.sales_analysis_chart.reflow();
    this.chart_net_inventory.reflow();
    this.chart_non_moving_inventory.reflow();
  }


  globalFilter(){
    var bu = this.bu.nativeElement.value;
    var geo = this.geo.nativeElement.value;
    var timeframe = this.timeframe.nativeElement.value;
    var currency = this.currency.nativeElement.value;
    var start_date = ''
    var end_date = ''
    var timeframeFilter = ''

    if(bu == ''){
      this.buFilter = 'All BU'
    }else if(bu == 'BU AIPF BU'){
      this.buFilter = 'AIPF'
    }else if(bu == 'BU Display Business'){
      this.buFilter = 'Display'
    }else if(bu == 'BU Smart Mfg.'){
      this.buFilter = 'Smart Mfg'
    }

    if(timeframe == 'ytd'){
      start_date = "2021-04-01";
      end_date = "2022-04-28";
      this.timeFilter = 'YTD';
      timeframeFilter = ''
      timeframe = ''
    }else if(timeframe == 'last_month'){
      start_date = "2021-03-28";
      end_date = "2022-04-28";
      timeframeFilter = ''
    }else if(timeframe == 'Q1'){
      start_date = "";
      end_date = "";
      this.timeFilter = 'Q1';
      timeframeFilter = 'Q1'
    }else if(timeframe == 'Q2'){
      start_date = "";
      end_date = "";
      this.timeFilter = 'Q2';
      timeframeFilter = 'Q2'
    }else if(timeframe == 'Q3'){
      start_date = "";
      end_date = "";
      this.timeFilter = 'Q3';
      timeframeFilter = 'Q3'
    }else if(timeframe == 'Q4'){
      start_date = "";
      end_date = "";
      this.timeFilter = 'Q4';
      timeframeFilter = 'Q4'
    }else if(timeframe == '1H'){
      start_date = "";
      end_date = "";
      this.timeFilter = '1H';
      timeframeFilter = '1H'
    }else if(timeframe == '2H'){
      start_date = "";
      end_date = "";
      this.timeFilter = '2H';
      timeframeFilter = '1H'
    }else if(timeframe == 'annual'){
      start_date = "";
      end_date = "";
      timeframeFilter = ''
      this.timeFilter = 'Annual';
      timeframe = ''
    }else if(timeframe == 'ytd'){
      start_date = "";
      end_date = "";
      timeframeFilter = ''
      this.timeFilter = 'YTD';
      timeframe = ''
    }else if(timeframe == 'custom'){
      
    }

  }

  togglePlChart(){
    if(this.togglePl.nativeElement.value == 'ex_issc'){
      this.hide_pl_chart_op_ex_issc = false;
      this.hide_pl_chart_op_inc_issc = true;
      this.pl_chart_op_ex_issc.reflow();
      this.pl_chart_op_inc_issc.reflow();
    }else{
      this.hide_pl_chart_op_ex_issc = true;
      this.hide_pl_chart_op_inc_issc = false;
      this.pl_chart_op_ex_issc.reflow();
      this.pl_chart_op_inc_issc.reflow();
    }
  }

  openSgaTrendModal(title){
    this.sgaCategoryTitle = title;
    this.blur = "blur";
    this.sgaTrendModal = "block";
  }

  closeSgaTrendModal(){
    this.sgaTrendModal = "none";
    this.blur = '';
  }

  openOrderAnalysisModal(){
    this.blur = "blur";
    this.orderAnalysisModal = "block";
  }

  closeOrderAnalysisModal(){
    this.orderAnalysisModal = "none";
    this.blur = '';
  }

  openSalesAnalysisModal(){
    this.blur = "blur";
    this.salesAnalysisModal = "block";
  }

  closeSalesAnalysisModal(){
    this.salesAnalysisModal = "none";
    this.blur = '';
  }

  plChart(){
    this.pl_chart_order = Highcharts.chart('pl-chart-order', {
      chart: {
        type: 'column',
      },
      title: {
        text: '<div style="text-align: right;"><span style="color:rgb(70, 121, 167); font-size:small;">vs Bud (-)118 [-3%]<br>vs 8BC (-)12</span></div>',
        align: 'right'
      },
      xAxis: {
          type: 'category'
      },
      yAxis: {
        title: {
            text: ''
        },
        gridLineColor: 'transparent',
        type: 'logarithmic',
        minorTickInterval: 100,
        stackLabels: {
          enabled: true,
          style: {
              fontWeight: 'bold',
              color: ( // theme
                  Highcharts.defaultOptions.title.style &&
                  Highcharts.defaultOptions.title.style.color
              ) || 'gray'
          },
          formatter: function () {
            return this.total;
          }
          // formatter: function () {
          //   return '' + Highcharts.numberFormat(this.total, 2, ',', ' ');
          // }
        },
        labels:{
          enabled: false
        }
      },
      legend: {
          enabled: false
      },
      plotOptions: {
          column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                formatter: function () {
                  return this.total;
                }
            }
          },
          series: {
            pointWidth: 80
          }
      },
      colors: ['rgb(46,117,182)', 'rgb(81,200,244)', 'rgb(127,127,127)', 'rgb(117,150,208)', 'rgb(143,163,213)', 'rgb(122,148,228)', 'rgb(132,174,220)', 'rgb(143,163,213)'],
      tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat: '<span style="color:{point.color}">Percentage</span>: <b>{point.percentage:.0f}%</b>'
      },
  
      series: [{
        name: 'Order',
        dataLabels: {
          enabled: true,
          formatter:function() {
            if(this.y != 0) {
              return '<span style="font-weight:normal;color:white;fill:white;">'+this.y+ '</span>';
            }
          },
          style: {
            color: 'white',
            textOutline: 'transparent'
          }
        },
        data: [{
          name: 'Budget',
          y: 6125,
          drilldown: ''
        }, {
          name: 'Estimate',
          y: 0,
          drilldown: ''
        }]
      }, {
        name: 'To Book',
        dataLabels: {
          enabled: true,
          formatter:function() {
            if(this.y != 0) {
              return '<span style="font-weight:normal;color:white;fill:white;">'+this.series.name+' '+this.y+ '</span>';
            }
          },
          style: {
            color: 'white',
            textOutline: 'transparent'
          }
        },
        data: [{
          name: 'Budget',
          y: 0,
          drilldown: ''
        }, {
          name: 'Estimate',
          y: 3622,
          drilldown: ''
        }]
      }, {
        name: 'YTD Act',
        dataLabels: {
          enabled: true,
          formatter:function() {
            if(this.y != 0) {
              return '<span style="font-weight:normal;color:white;fill:white;">'+this.series.name+' '+this.y+ '</span>';
            }
          },
          style: {
            color: 'white',
            textOutline: 'transparent'
          }
        },
        data: [{
          name: 'Budget',
          y: 0,
          drilldown: ''
        }, {
          name: 'Estimate',
          y: 4437,
          drilldown: ''
        }]
      }],
      drilldown: {
        activeDataLabelStyle: {
          textDecoration: 'none'
        },
        activeAxisLabelStyle: {
          textDecoration: 'none'
        },
        series: [
          {
            name: 'O-Pipepline',
            type: 'pie',
            id: 'togOrder Pipeline',
            dataLabels: {
              enabled: true,
              format: '<span style="font-weight:normal;color:black;fill:white;">{point.name} {point.y}</span>',
              distance: 20,
              style: {
                color: 'black',
                textOutline: 'transparent'
              },
            },
            cursor: 'pointer',
            point: {
                events: {
                    click: function () {
                        // location.href = this.options.url;
                        window.open(this.options.url);
                    }
                }
            },
            tooltip: {
              headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
              pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.percentage: .2f} %</b><br/>'
            },
            size: 180,
            borderWidth: 3,
            borderColor: '#fff',
            data: [
            {
              name: 'A',
              y: 0,
              url: ''
            }
            ]
          }
        ]
      }
    } as any);
    this.pl_chart_sales = Highcharts.chart('pl-chart-sales', {
      chart: {
        type: 'column',
      },
      title: {
          text: '<div style="text-align: right;"><span style="color:rgb(70, 121, 167); font-size:small;">vs Bud (+)321 [8%]<br>vs 8BC (-)30</span></div>',
          align: 'right'
      },
      xAxis: {
          type: 'category'
      },
      yAxis: {
        title: {
            text: ''
        },
        gridLineColor: 'transparent',
        type: 'logarithmic',
        minorTickInterval: 100,
        stackLabels: {
          enabled: true,
          style: {
              fontWeight: 'bold',
              color: ( // theme
                  Highcharts.defaultOptions.title.style &&
                  Highcharts.defaultOptions.title.style.color
              ) || 'gray'
          },
          formatter: function () {
            return this.total;
          }
          // formatter: function () {
          //   return '' + Highcharts.numberFormat(this.total, 2, ',', ' ');
          // }
        },
        labels:{
          enabled: false
        }
      },
      legend: {
          enabled: false
      },
      plotOptions: {
          column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                formatter: function () {
                  return this.total;
                }
            }
          },
          series: {
            pointWidth: 80
          }
      },
      colors: ['rgb(46,117,182)', 'rgb(81,200,244)', 'rgb(127,127,127)', 'rgb(117,150,208)', 'rgb(143,163,213)', 'rgb(122,148,228)', 'rgb(132,174,220)', 'rgb(143,163,213)'],
      tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat: '<span style="color:{point.color}">Percentage</span>: <b>{point.percentage:.0f}%</b>'
      },
  
      series: [{
        name: 'Sales',
        dataLabels: {
          enabled: true,
          formatter:function() {
            if(this.y != 0) {
              return '<span style="font-weight:normal;color:white;fill:white;">'+this.y+ '</span>';
            }
          },
          style: {
            color: 'white',
            textOutline: 'transparent'
          }
        },
        data: [{
          name: 'Budget',
          y: 8299,
          drilldown: ''
        }, {
          name: 'Estimate',
          y: 0,
          drilldown: ''
        }]
      }, {
        name: 'To Book',
        dataLabels: {
          enabled: true,
          formatter:function() {
            if(this.y != 0) {
              return '<span style="font-weight:normal;color:white;fill:white;">'+this.series.name+' '+this.y+ '</span>';
            }
          },
          style: {
            color: 'white',
            textOutline: 'transparent'
          }
        },
        data: [{
          name: 'Budget',
          y: 0,
          drilldown: ''
        }, {
          name: 'Estimate',
          y: 1508,
          drilldown: ''
        }]
      }, {
        name: 'YTD Act',
        dataLabels: {
          enabled: true,
          formatter:function() {
            if(this.y != 0) {
              return '<span style="font-weight:normal;color:white;fill:white;">'+this.series.name+' '+this.y+ '</span>';
            }
          },
          style: {
            color: 'white',
            textOutline: 'transparent'
          }
        },
        data: [{
          name: 'Budget',
          y: 0,
          drilldown: ''
        }, {
          name: 'Estimate',
          y: 6447,
          drilldown: ''
        }]
      }],
      drilldown: {
        activeDataLabelStyle: {
          textDecoration: 'none'
        },
        activeAxisLabelStyle: {
          textDecoration: 'none'
        },
        series: [
          {
            name: 'O-Pipepline',
            type: 'pie',
            id: 'togOrder Pipeline',
            dataLabels: {
              enabled: true,
              format: '<span style="font-weight:normal;color:black;fill:white;">{point.name} {point.y}</span>',
              distance: 20,
              style: {
                color: 'black',
                textOutline: 'transparent'
              },
            },
            cursor: 'pointer',
            point: {
                events: {
                    click: function () {
                        // location.href = this.options.url;
                        window.open(this.options.url);
                    }
                }
            },
            tooltip: {
              headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
              pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.percentage: .2f} %</b><br/>'
            },
            size: 180,
            borderWidth: 3,
            borderColor: '#fff',
            data: [
            {
              name: 'A',
              y: 0,
              url: ''
            }
            ]
          }
        ]
      }
    } as any);
    this.pl_chart_gp = Highcharts.chart('pl-chart-gp', {
      chart: {
        type: 'column',
      },
      title: {
          text: '<div style="text-align: right;"><span style="color:rgb(70, 121, 167); font-size:small;">vs Bud (+)259 [40%]<br>vs 8BC (-)30</span></div>',
          align: 'right'
      },
      xAxis: {
          type: 'category'
      },
      yAxis: {
        title: {
            text: ''
        },
        gridLineColor: 'transparent',
        type: 'logarithmic',
        minorTickInterval: 100,
        stackLabels: {
          enabled: true,
          style: {
              fontWeight: 'bold',
              color: ( // theme
                  Highcharts.defaultOptions.title.style &&
                  Highcharts.defaultOptions.title.style.color
              ) || 'gray'
          },
          formatter: function () {
            return this.total;
          }
          // formatter: function () {
          //   return '' + Highcharts.numberFormat(this.total, 2, ',', ' ');
          // }
        },
        labels:{
          enabled: false
        }
      },
      legend: {
          enabled: false
      },
      plotOptions: {
          column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                formatter: function () {
                  return this.total;
                }
            }
          },
          series: {
            pointWidth: 80
          }
      },
      colors: ['rgb(46,117,182)', 'rgb(81,200,244)', 'rgb(127,127,127)', 'rgb(117,150,208)', 'rgb(143,163,213)', 'rgb(122,148,228)', 'rgb(132,174,220)', 'rgb(143,163,213)'],
      tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat: '<span style="color:{point.color}">Percentage</span>: <b>{point.percentage:.0f}%</b>'
      },
  
      series: [{
        name: 'GP',
        dataLabels: {
          enabled: true,
          formatter:function() {
            if(this.y != 0) {
              return '<span style="font-weight:normal;color:white;fill:white;">'+this.y+ '</span>';
            }
          },
          style: {
            color: 'white',
            textOutline: 'transparent'
          }
        },
        data: [{
          name: 'Budget',
          y: 534,
          drilldown: ''
        }, {
          name: 'Estimate',
          y: 0,
          drilldown: ''
        }]
      }, {
        name: 'To Book',
        dataLabels: {
          enabled: true,
          formatter:function() {
            if(this.y != 0) {
              return '<span style="font-weight:normal;color:white;fill:white;">'+this.series.name+' '+this.y+ '</span>';
            }
          },
          style: {
            color: 'white',
            textOutline: 'transparent'
          }
        },
        data: [{
          name: 'Budget',
          y: 0,
          drilldown: ''
        }, {
          name: 'Estimate',
          y: 278,
          drilldown: ''
        }]
      }, {
        name: 'YTD Act',
        dataLabels: {
          enabled: true,
          formatter:function() {
            if(this.y != 0) {
              return '<span style="font-weight:normal;color:white;fill:white;">'+this.series.name+' '+this.y+ '</span>';
            }
          },
          style: {
            color: 'white',
            textOutline: 'transparent'
          }
        },
        data: [{
          name: 'Budget',
          y: 0,
          drilldown: ''
        }, {
          name: 'Estimate',
          y: 876,
          drilldown: ''
        }]
      }],
      drilldown: {
        activeDataLabelStyle: {
          textDecoration: 'none'
        },
        activeAxisLabelStyle: {
          textDecoration: 'none'
        },
        series: [
          {
            name: 'O-Pipepline',
            type: 'pie',
            id: 'togOrder Pipeline',
            dataLabels: {
              enabled: true,
              format: '<span style="font-weight:normal;color:black;fill:white;">{point.name} {point.y}</span>',
              distance: 20,
              style: {
                color: 'black',
                textOutline: 'transparent'
              },
            },
            cursor: 'pointer',
            point: {
                events: {
                    click: function () {
                        // location.href = this.options.url;
                        window.open(this.options.url);
                    }
                }
            },
            tooltip: {
              headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
              pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.percentage: .2f} %</b><br/>'
            },
            size: 180,
            borderWidth: 3,
            borderColor: '#fff',
            data: [
            {
              name: 'A',
              y: 0,
              url: ''
            }
            ]
          }
        ]
      }
    } as any);
    this.pl_chart_op_ex_issc = Highcharts.chart('pl-chart-op-ex-issc', {
      chart: {
        type: 'column',
      },
      title: {
          text: '<div style="text-align: right;"><span style="color:rgb(70, 121, 167); font-size:small;">vs Bud (+)172 [12%]<br>vs 8BC (+)10</span></div>',
          align: 'right'
      },
      xAxis: {
          type: 'category'
      },
      yAxis: {
        title: {
            text: ''
        },
        gridLineColor: 'transparent',
        type: 'logarithmic',
        minorTickInterval: 100,
        stackLabels: {
          enabled: true,
          style: {
              fontWeight: 'bold',
              color: ( // theme
                  Highcharts.defaultOptions.title.style &&
                  Highcharts.defaultOptions.title.style.color
              ) || 'gray'
          },
          formatter: function () {
            return this.total;
          }
          // formatter: function () {
          //   return '' + Highcharts.numberFormat(this.total, 2, ',', ' ');
          // }
        },
        labels:{
          enabled: false
        }
      },
      legend: {
          enabled: false
      },
      plotOptions: {
          column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                formatter: function () {
                  return this.total;
                }
            }
          },
          series: {
            pointWidth: 80
          }
      },
      colors: ['rgb(46,117,182)', 'rgb(81,200,244)', 'rgb(127,127,127)', 'rgb(117,150,208)', 'rgb(143,163,213)', 'rgb(122,148,228)', 'rgb(132,174,220)', 'rgb(143,163,213)'],
      tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat: '<span style="color:{point.color}">Percentage</span>: <b>{point.percentage:.0f}%</b>'
      },
  
      series: [{
        name: 'OP',
        dataLabels: {
          enabled: true,
          formatter:function() {
            if(this.y != 0) {
              return '<span style="font-weight:normal;color:white;fill:white;">'+this.y+ '</span>';
            }
          },
          style: {
            color: 'white',
            textOutline: 'transparent'
          }
        },
        data: [{
          name: 'Budget',
          y: 444,
          drilldown: ''
        }, {
          name: 'Estimate',
          y: 0,
          drilldown: ''
        }]
      }, {
        name: 'To Book',
        dataLabels: {
          enabled: true,
          formatter:function() {
            if(this.y != 0) {
              return '<span style="font-weight:normal;color:white;fill:white;">'+this.series.name+' '+this.y+ '</span>';
            }
          },
          style: {
            color: 'white',
            textOutline: 'transparent'
          }
        },
        data: [{
          name: 'Budget',
          y: 0,
          drilldown: ''
        }, {
          name: 'Estimate',
          y: 177,
          drilldown: ''
        }]
      }, {
        name: 'YTD Act',
        dataLabels: {
          enabled: true,
          formatter:function() {
            if(this.y != 0) {
              return '<span style="font-weight:normal;color:white;fill:white;">'+this.series.name+' '+this.y+ '</span>';
            }
          },
          style: {
            color: 'white',
            textOutline: 'transparent'
          }
        },
        data: [{
          name: 'Budget',
          y: 0,
          drilldown: ''
        }, {
          name: 'Estimate',
          y: 975,
          drilldown: ''
        }]
      }],
      drilldown: {
        activeDataLabelStyle: {
          textDecoration: 'none'
        },
        activeAxisLabelStyle: {
          textDecoration: 'none'
        },
        series: [
          {
            name: 'O-Pipepline',
            type: 'pie',
            id: 'togOrder Pipeline',
            dataLabels: {
              enabled: true,
              format: '<span style="font-weight:normal;color:black;fill:white;">{point.name} {point.y}</span>',
              distance: 20,
              style: {
                color: 'black',
                textOutline: 'transparent'
              },
            },
            cursor: 'pointer',
            point: {
                events: {
                    click: function () {
                        // location.href = this.options.url;
                        window.open(this.options.url);
                    }
                }
            },
            tooltip: {
              headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
              pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.percentage: .2f} %</b><br/>'
            },
            size: 180,
            borderWidth: 3,
            borderColor: '#fff',
            data: [
            {
              name: 'A',
              y: 0,
              url: ''
            }
            ]
          }
        ]
      }
    } as any);
    this.pl_chart_op_inc_issc = Highcharts.chart('pl-chart-op-inc-issc', {
      chart: {
        type: 'column',
      },
      title: {
          text: '<div style="text-align: right;"><span style="color:rgb(70, 121, 167); font-size:small;">vs Bud (+)172 [12%]<br>vs 8BC (+)10</span></div>',
          align: 'right'
      },
      xAxis: {
          type: 'category'
      },
      yAxis: {
        title: {
            text: ''
        },
        gridLineColor: 'transparent',
        type: 'logarithmic',
        minorTickInterval: 100,
        stackLabels: {
          enabled: true,
          style: {
              fontWeight: 'bold',
              color: ( // theme
                  Highcharts.defaultOptions.title.style &&
                  Highcharts.defaultOptions.title.style.color
              ) || 'gray'
          },
          formatter: function () {
            return this.total;
          }
          // formatter: function () {
          //   return '' + Highcharts.numberFormat(this.total, 2, ',', ' ');
          // }
        },
        labels:{
          enabled: false
        }
      },
      legend: {
          enabled: false
      },
      plotOptions: {
          column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                formatter: function () {
                  return this.total;
                }
            }
          },
          series: {
            pointWidth: 80
          }
      },
      colors: ['rgb(46,117,182)', 'rgb(81,200,244)', 'rgb(127,127,127)', 'rgb(117,150,208)', 'rgb(143,163,213)', 'rgb(122,148,228)', 'rgb(132,174,220)', 'rgb(143,163,213)'],
      tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat: '<span style="color:{point.color}">Percentage</span>: <b>{point.percentage:.0f}%</b>'
      },
  
      series: [{
        name: 'OP',
        dataLabels: {
          enabled: true,
          formatter:function() {
            if(this.y != 0) {
              return '<span style="font-weight:normal;color:white;fill:white;">'+this.y+ '</span>';
            }
          },
          style: {
            color: 'white',
            textOutline: 'transparent'
          }
        },
        data: [{
          name: 'Budget',
          y: 409,
          drilldown: ''
        }, {
          name: 'Estimate',
          y: 0,
          drilldown: ''
        }]
      }, {
        name: 'To Book',
        dataLabels: {
          enabled: true,
          formatter:function() {
            if(this.y != 0) {
              return '<span style="font-weight:normal;color:white;fill:white;">'+this.series.name+' '+this.y+ '</span>';
            }
          },
          style: {
            color: 'white',
            textOutline: 'transparent'
          }
        },
        data: [{
          name: 'Budget',
          y: 0,
          drilldown: ''
        }, {
          name: 'Estimate',
          y: 168,
          drilldown: ''
        }]
      }, {
        name: 'YTD Act',
        dataLabels: {
          enabled: true,
          formatter:function() {
            if(this.y != 0) {
              return '<span style="font-weight:normal;color:white;fill:white;">'+this.series.name+' '+this.y+ '</span>';
            }
          },
          style: {
            color: 'white',
            textOutline: 'transparent'
          }
        },
        data: [{
          name: 'Budget',
          y: 0,
          drilldown: ''
        }, {
          name: 'Estimate',
          y: 929,
          drilldown: ''
        }]
      }],
      drilldown: {
        activeDataLabelStyle: {
          textDecoration: 'none'
        },
        activeAxisLabelStyle: {
          textDecoration: 'none'
        },
        series: [
          {
            name: 'O-Pipepline',
            type: 'pie',
            id: 'togOrder Pipeline',
            dataLabels: {
              enabled: true,
              format: '<span style="font-weight:normal;color:black;fill:white;">{point.name} {point.y}</span>',
              distance: 20,
              style: {
                color: 'black',
                textOutline: 'transparent'
              },
            },
            cursor: 'pointer',
            point: {
                events: {
                    click: function () {
                        // location.href = this.options.url;
                        window.open(this.options.url);
                    }
                }
            },
            tooltip: {
              headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
              pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.percentage: .2f} %</b><br/>'
            },
            size: 180,
            borderWidth: 3,
            borderColor: '#fff',
            data: [
            {
              name: 'A',
              y: 0,
              url: ''
            }
            ]
          }
        ]
      }
    } as any);
  }

  orderAnalysisChart(){
    this.order_analysis_chart = Highcharts.chart('order-analysis-chart', {
      chart: {
        type: 'column',
      },
      title: {
          text: '' ,
          align: 'right'
      },
      xAxis: {
          type: 'category'
      },
      yAxis: {
        title: {
            text: ''
        },
        gridLineColor: 'transparent',
        type: 'logarithmic',
        minorTickInterval: 100,
        stackLabels: {
          enabled: true,
          style: {
              fontWeight: 'bold',
              color: ( // theme
                  Highcharts.defaultOptions.title.style &&
                  Highcharts.defaultOptions.title.style.color
              ) || 'gray'
          },
          formatter: function () {
            return this.total;
          }
          // formatter: function () {
          //   return '' + Highcharts.numberFormat(this.total, 2, ',', ' ');
          // }
        },
        labels:{
          enabled: false
        }
      },
      legend: {
          enabled: false
      },
      plotOptions: {
          column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                formatter: function () {
                  return this.total;
                }
            }
          },
          series: {
            pointWidth: 90
          }
      },
      colors: ['rgb(67,116,160)', 'rgb(91,155,213)', 'rgb(151,185,224)', 'rgb(80,137,188)', 'rgb(255,255,255)', 'rgb(122,148,228)', 'rgb(132,174,220)', 'rgb(143,163,213)'],
      tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat: '<span style="color:{point.color}">Percentage</span>: <b>{point.percentage:.0f}%</b>'
      },
  
      series: [{
        name: 'Budget',
        dataLabels: {
          enabled: true,
          formatter:function() {
            if(this.y != 0) {
              return '<span style="font-weight:normal;color:white;fill:white;">'+this.series.name+' '+this.y+ '</span>';
            }
          },
          style: {
            color: 'white',
            textOutline: 'transparent'
          }
        },
        data: [{
          name: 'Budget',
          y: 6125,
          drilldown: ''
        }, {
          name: 'Estimate',
          y: 0,
          drilldown: ''
        }, {
          name: 'Pipeline',
          y: 0,
          drilldown: ''
        }]
      }, {
        name: 'To Go',
        dataLabels: {
          enabled: true,
          formatter:function() {
            if(this.y != 0) {
              return '<span style="font-weight:normal;color:white;fill:white;">'+this.series.name+' '+this.y+ '</span>';
            }
          },
          style: {
            color: 'white',
            textOutline: 'transparent'
          }
        },
        data: [{
          name: 'Budget',
          y: 0,
          drilldown: ''
        }, {
          name: 'Estimate',
          y: 3622,
          drilldown: ''
        }, {
          name: 'Pipeline',
          y: 0,
          drilldown: ''
        }]
      }, {
        name: 'Actual',
        dataLabels: {
          enabled: true,
          formatter:function() {
            if(this.y != 0) {
              return '<span style="font-weight:normal;color:white;fill:white;">'+this.series.name+' '+this.y+ '</span>';
            }
          },
          style: {
            color: 'white',
            textOutline: 'transparent'
          }
        },
        data: [{
          name: 'Budget',
          y: 0,
          drilldown: ''
        }, {
          name: 'Estimate',
          y: 4437,
          drilldown: ''
        }, {
          name: 'Pipeline',
          y: 0,
          drilldown: ''
        }]
      }, {
        name: 'Pipeline',
        dataLabels: {
          enabled: true,
          formatter:function() {
            if(this.y != 0) {
              return '<span style="font-weight:normal;color:white;fill:white;">'+this.series.name+' '+this.y+ '</span>';
            }
          },
          style: {
            color: 'white',
            textOutline: 'transparent'
          }
        },
        data: [{
          name: 'Budget',
          y: 0,
          drilldown: ''
        }, {
          name: 'Estimate',
          y: 0,
          drilldown: ''
        }, {
          name: 'Pipeline',
          y: 3012,
          drilldown: ''
        }]
      }, {
        name: 'Actual',
        dataLabels: {
          enabled: true,
          formatter:function() {
            if(this.y != 0) {
              return '<span style="font-weight:normal;color:white;fill:white;">'+this.series.name+' '+this.y+ '</span>';
            }
          },
          style: {
            color: 'white',
            textOutline: 'transparent'
          }
        },
        data: [{
          name: 'Budget',
          y: 0,
          drilldown: ''
        }, {
          name: 'Estimate',
          y: 0,
          drilldown: ''
        }, {
          name: 'Pipeline',
          y: 4437,
          drilldown: ''
        }]
      }],
      drilldown: {
        activeDataLabelStyle: {
          textDecoration: 'none'
        },
        activeAxisLabelStyle: {
          textDecoration: 'none'
        },
        series: [
          {
            name: 'O-Pipepline',
            type: 'pie',
            id: 'togOrder Pipeline',
            dataLabels: {
              enabled: true,
              format: '<span style="font-weight:normal;color:black;fill:white;">{point.name} {point.y}</span>',
              distance: 20,
              style: {
                color: 'black',
                textOutline: 'transparent'
              },
            },
            cursor: 'pointer',
            point: {
                events: {
                    click: function () {
                        // location.href = this.options.url;
                        window.open(this.options.url);
                    }
                }
            },
            tooltip: {
              headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
              pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.percentage: .2f} %</b><br/>'
            },
            size: 180,
            borderWidth: 3,
            borderColor: '#fff',
            data: [
            {
              name: 'A',
              y: 0,
              url: ''
            }
            ]
          }
        ]
      }
    } as any);
  }

  salesAnalysisChart(){
    this.sales_analysis_chart = Highcharts.chart('sales-analysis-chart', {
      chart: {
        type: 'column',
      },
      title: {
          text: '' ,
          align: 'right'
      },
      xAxis: {
          type: 'category'
      },
      yAxis: {
        title: {
            text: ''
        },
        gridLineColor: 'transparent',
        type: 'logarithmic',
        minorTickInterval: 100,
        stackLabels: {
          enabled: true,
          style: {
              fontWeight: 'bold',
              color: ( // theme
                  Highcharts.defaultOptions.title.style &&
                  Highcharts.defaultOptions.title.style.color
              ) || 'gray'
          },
          formatter: function () {
            return this.total;
          }
          // formatter: function () {
          //   return '' + Highcharts.numberFormat(this.total, 2, ',', ' ');
          // }
        },
        labels:{
          enabled: false
        },
        reversedStacks: true
      },
      legend: {
          enabled: false
      },
      plotOptions: {
          column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                formatter: function () {
                  return this.total;
                }
            },
            colorByPoint: true
          },
          series: {
            pointWidth: 80
          }
      },
      // colors: ['rgb(44,77,135)', 'rgb(63,106,183)', 'rgb(68,114,196)', 'rgb(179,190,223)', 'rgb(179,190,223)', 'rgb(121,145,206)', 'rgb(154,170,215)', 'rgb(179,190,223)'],
      tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat: '<span style="color:{point.color}">Percentage</span>: <b>{point.percentage:.0f}%</b>'
      },
  
      series: [{
        name: 'Order',
        dataLabels: {
          enabled: true,
          formatter:function() {
            if(this.y != 0) {
              return '<span style="font-weight:normal;color:white;fill:white;">'+this.y+ '</span>';
            }
          },
          style: {
            color: 'white',
            textOutline: 'transparent'
          }
        },
        data: [{
          name: 'Budget',
          y: 8299,
          color: 'rgb(44,77,135)',
          drilldown: ''
        }, {
          name: 'By Rank',
          y: 0,
          drilldown: ''
        }, {
          name: 'Est from',
          y: 0,
          drilldown: ''
        }]
      }, {
        name: 'E',
        dataLabels: {
          enabled: true,
          formatter:function() {
            if(this.y != 0) {
              return '<span style="font-weight:normal;color:white;fill:white;">'+this.series.name+' '+this.y+ '</span>';
            }
          },
          style: {
            color: 'white',
            textOutline: 'transparent'
          }
        },
        data: [{
          name: 'Budget',
          y: 0,
          drilldown: ''
        }, {
          name: 'By Rank',
          y: 250,
          color: 'rgb(63,106,183)',
          drilldown: ''
        }, {
          name: 'Est from',
          y: 0,
          drilldown: ''
        }]
      }, {
        name: 'D',
        dataLabels: {
          enabled: true,
          formatter:function() {
            if(this.y != 0) {
              return '<span style="font-weight:normal;color:white;fill:white;">'+this.series.name+' '+this.y+ '</span>';
            }
          },
          style: {
            color: 'white',
            textOutline: 'transparent'
          }
        },
        data: [{
          name: 'Budget',
          y: 0,
          drilldown: ''
        }, {
          name: 'By Rank',
          y: 230,
          color: 'rgb(68,114,196)',
          drilldown: ''
        }, {
          name: 'Est from',
          y: 0,
          drilldown: ''
        }]
      }, {
        name: 'C',
        dataLabels: {
          enabled: true,
          formatter:function() {
            if(this.y != 0) {
              return '<span style="font-weight:normal;color:white;fill:white;">'+this.series.name+' '+this.y+ '</span>';
            }
          },
          style: {
            color: 'white',
            textOutline: 'transparent'
          }
        },
        data: [{
          name: 'Budget',
          y: 0,
          drilldown: ''
        }, {
          name: 'By Rank',
          y: 270,
          color: 'rgb(68,114,196)',
          drilldown: ''
        }, {
          name: 'Est from',
          y: 0,
          drilldown: ''
        }]
      }, {
        name: 'B',
        dataLabels: {
          enabled: true,
          formatter:function() {
            if(this.y != 0) {
              return '<span style="font-weight:normal;color:white;fill:white;">'+this.series.name+' '+this.y+ '</span>';
            }
          },
          style: {
            color: 'white',
            textOutline: 'transparent'
          }
        },
        data: [{
          name: 'Budget',
          y: 0,
          drilldown: ''
        }, {
          name: 'By Rank',
          y: 383,
          color: 'rgb(179,190,223)',
          drilldown: ''
        }, {
          name: 'Est from',
          y: 0,
          drilldown: ''
        }]
      }, {
        name: 'A',
        dataLabels: {
          enabled: true,
          formatter:function() {
            if(this.y != 0) {
              return '<span style="font-weight:normal;color:white;fill:white;">'+this.series.name+' '+this.y+ '</span>';
            }
          },
          style: {
            color: 'white',
            textOutline: 'transparent'
          }
        },
        data: [{
          name: 'Budget',
          y: 0,
          drilldown: ''
        }, {
          name: 'By Rank',
          y: 855,
          color: 'rgb(179,190,223)',
          drilldown: ''
        }, {
          name: 'Est from',
          y: 0,
          drilldown: ''
        }]
      },{
        name: 'New',
        dataLabels: {
          enabled: true,
          formatter:function() {
            if(this.y != 0) {
              return '<span style="font-weight:normal;color:white;fill:white;">'+this.series.name+' '+this.y+ '</span>';
            }
          },
          style: {
            color: 'white',
            textOutline: 'transparent'
          }
        },
        data: [{
          name: 'Budget',
          y: 0,
          drilldown: ''
        }, {
          name: 'By Rank',
          y: 0,
          drilldown: ''
        }, {
          name: 'Est from',
          y: 932,
          color: 'rgb(121,145,206)',
          drilldown: ''
        }]
      },{
        name: 'B/L',
        dataLabels: {
          enabled: true,
          formatter:function() {
            if(this.y != 0) {
              return '<span style="font-weight:normal;color:white;fill:white;">'+this.series.name+' '+this.y+ '</span>';
            }
          },
          style: {
            color: 'white',
            textOutline: 'transparent'
          }
        },
        data: [{
          name: 'Budget',
          y: 0,
          drilldown: ''
        }, {
          name: 'By Rank',
          y: 0,
          drilldown: ''
        }, {
          name: 'Est from',
          y: 1056,
          color: 'rgb(154,170,215)',
          drilldown: ''
        }]
      },{
        name: 'Act',
        dataLabels: {
          enabled: true,
          formatter:function() {
            if(this.y != 0) {
              return '<span style="font-weight:normal;color:white;fill:white;">'+this.series.name+' '+this.y+ '</span>';
            }
          },
          style: {
            color: 'white',
            textOutline: 'transparent'
          }
        },
        data: [{
          name: 'Budget',
          y: 0,
          drilldown: ''
        }, {
          name: 'By Rank',
          y: 6447,
          color: 'rgb(179,190,223)',
          drilldown: ''
        }, {
          name: 'Est from',
          y: 6447,
          color: 'rgb(179,190,223)',
          drilldown: ''
        }]
      }],
      drilldown: {
        activeDataLabelStyle: {
          textDecoration: 'none'
        },
        activeAxisLabelStyle: {
          textDecoration: 'none'
        },
        series: [
          {
            name: 'O-Pipepline',
            type: 'pie',
            id: 'togOrder Pipeline',
            dataLabels: {
              enabled: true,
              format: '<span style="font-weight:normal;color:black;fill:white;">{point.name} {point.y}</span>',
              distance: 20,
              style: {
                color: 'black',
                textOutline: 'transparent'
              },
            },
            cursor: 'pointer',
            point: {
                events: {
                    click: function () {
                        // location.href = this.options.url;
                        window.open(this.options.url);
                    }
                }
            },
            tooltip: {
              headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
              pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.percentage: .2f} %</b><br/>'
            },
            size: 180,
            borderWidth: 3,
            borderColor: '#fff',
            data: [
            {
              name: 'A',
              y: 0,
              url: ''
            }
            ]
          }
        ]
      }
    } as any);
  }

  inventoryChart(){
    var amount_arr_net_inventory = [
      ['TRN', 178],
      ['Display', 16],
      ['PNS', 15],
      ['CNS', 0],
      ['SUB', 2],
      ['Public Safety', 16],
      ['Others', 0],
      ['Smart Mfg.', 0],
      ['Corporate', 25],
    ];
    this.chart_net_inventory = Highcharts.chart('net-inventory', {
      chart: {
          type: 'pie'
      },
      colors: ['rgb(70,121,167)','rgb(192, 201, 228)', 'rgb(162,197,238)', 'rgb(124,148,207)', 'rgb(48,137,202)'],
      title: {
          text: '',
          align: 'center',
          verticalAlign: 'middle',
          x: 0
      },
      accessibility: {
          announceNewData: {
              enabled: true
          },
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
        pie: {
          size:'100%',
          dataLabels: {
            enabled: true,
            // color: '#000000',
            // connectorColor: '#000000',
            format: '<span style="font-weight:normal;color:black;fill:white;">{point.name} {point.y}%</span>',
            distance: 10,
            style: {
              color: 'black',
              textOutline: 'transparent'
            },
          }
        },
        series: {
            dataLabels: {
                enabled: false,
                format: '{point.y:.1f}%'
            },
            cursor: 'pointer',
        }
      },
      tooltip: {
          // headerFormat: '<span style="font-size:11px">Percentage</span><br>',
          // pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
          formatter(){
            let point = this,
            amount;
            amount_arr_net_inventory.forEach(d => {
              if(d[0] == point.point['name']){
                amount = d[1]
              }
            })
            return `${point.key} <br> <b>${point.series.name}: ${point.point.y}%</b> <br>Amount: ${amount}Mn`
          }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        itemMarginTop: 10,
        itemMarginBottom: 10,
        labelFormat: '{name} {y:.1f}%',
      },
      series: [
          {
              name: "Percentage",
              showInLegend: false,
              colorByPoint: true,
              innerSize: '50%',
              point: {
                events: {
                    click: function () {
                        // location.href = this.options.url;
                        window.open(this.options.url);
                    }
                }
              },
              data: [ {
                  name: 'TRN',
                  y: 70.8,
                  // url: this.base_url+'records?bu='+bu+'&lost_reason=Price&timeframe='+timeframe
                },
                {
                  name: 'Display',
                  y: 6.2,
                  // url: this.base_url+'records?bu='+bu+'&lost_reason=Lost to Competition&timeframe='+timeframe
                },
                {
                  name: 'PNS',
                  y: 6,
                  // url: this.base_url+'records?bu='+bu+'&lost_reason=Lost to Competition&timeframe='+timeframe
                },
                {
                  name: 'CNS',
                  y: 0.1,
                  // url: this.base_url+'records?bu='+bu+'&lost_reason=Lost to Competition&timeframe='+timeframe
                },
                {
                  name: 'SUB',
                  y: 0.7,
                  // url: this.base_url+'records?bu='+bu+'&lost_reason=Lost to Competition&timeframe='+timeframe
                },
                {
                  name: 'Public Safety',
                  y: 6.2,
                  // url: this.base_url+'records?bu='+bu+'&lost_reason=Lost to Competition&timeframe='+timeframe
                },
                {
                  name: 'Others',
                  y: 0.0,
                  // url: this.base_url+'records?bu='+bu+'&lost_reason=Lost to Competition&timeframe='+timeframe
                },
                {
                  name: 'Smart Mfg.',
                  y: 0.0,
                  // url: this.base_url+'records?bu='+bu+'&lost_reason=Lost to Competition&timeframe='+timeframe
                },
                {
                  name: 'Corporate',
                  y: 10.1,
                  // url: this.base_url+'records?bu='+bu+'&lost_reason=Lost to Competition&timeframe='+timeframe
                }
              ]
          }
      ]
    } as any);
    var amount_arr_non_moving_inventory = [
      ['TRN', 59],
      ['Display', 6],
      ['PNS', 2],
      ['CNS', 0],
      ['SUB', 0],
      ['Public Safety', 11],
      ['Others', 4],
      ['Smart Mfg.', 0],
      ['Corporate', 0],
    ];
    this.chart_net_inventory = Highcharts.chart('non-moving-inventory', {
      chart: {
          type: 'pie'
      },
      colors: ['rgb(70,121,167)','rgb(192, 201, 228)', 'rgb(162,197,238)', 'rgb(124,148,207)', 'rgb(48,137,202)'],
      title: {
          text: '',
          align: 'center',
          verticalAlign: 'middle',
          x: 0
      },
      accessibility: {
          announceNewData: {
              enabled: true
          },
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
        pie: {
          size:'100%',
          dataLabels: {
            enabled: true,
            // color: '#000000',
            // connectorColor: '#000000',
            format: '<span style="font-weight:normal;color:black;fill:white;">{point.name} {point.y}%</span>',
            distance: 10,
            style: {
              color: 'black',
              textOutline: 'transparent'
            },
          }
        },
        series: {
            dataLabels: {
                enabled: false,
                format: '{point.y:.1f}%'
            },
            cursor: 'pointer',
        }
      },
      tooltip: {
          // headerFormat: '<span style="font-size:11px">Percentage</span><br>',
          // pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
          formatter(){
            let point = this,
            amount;
            amount_arr_non_moving_inventory.forEach(d => {
              if(d[0] == point.point['name']){
                amount = d[1]
              }
            })
            return `${point.key} <br> <b>${point.series.name}: ${point.point.y}%</b> <br>Amount: ${amount}Mn`
          }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        itemMarginTop: 10,
        itemMarginBottom: 10,
        labelFormat: '{name} {y:.1f}%',
      },
      series: [
          {
              name: "Percentage",
              showInLegend: false,
              colorByPoint: true,
              innerSize: '50%',
              point: {
                events: {
                    click: function () {
                        // location.href = this.options.url;
                        window.open(this.options.url);
                    }
                }
              },
              data: [ {
                  name: 'TRN',
                  y: 72.3,
                  // url: this.base_url+'records?bu='+bu+'&lost_reason=Price&timeframe='+timeframe
                },
                {
                  name: 'Display',
                  y: 7.1,
                  // url: this.base_url+'records?bu='+bu+'&lost_reason=Lost to Competition&timeframe='+timeframe
                },
                {
                  name: 'PNS',
                  y: 2.2,
                  // url: this.base_url+'records?bu='+bu+'&lost_reason=Lost to Competition&timeframe='+timeframe
                },
                {
                  name: 'CNS',
                  y: 0.1,
                  // url: this.base_url+'records?bu='+bu+'&lost_reason=Lost to Competition&timeframe='+timeframe
                },
                {
                  name: 'SUB',
                  y: 0.0,
                  // url: this.base_url+'records?bu='+bu+'&lost_reason=Lost to Competition&timeframe='+timeframe
                },
                {
                  name: 'Public Safety',
                  y: 13.8,
                  // url: this.base_url+'records?bu='+bu+'&lost_reason=Lost to Competition&timeframe='+timeframe
                },
                {
                  name: 'Others',
                  y: 4.6,
                  // url: this.base_url+'records?bu='+bu+'&lost_reason=Lost to Competition&timeframe='+timeframe
                },
                {
                  name: 'Smart Mfg.',
                  y: 0.0,
                  // url: this.base_url+'records?bu='+bu+'&lost_reason=Lost to Competition&timeframe='+timeframe
                },
                {
                  name: 'Corporate',
                  y: 0.0,
                  // url: this.base_url+'records?bu='+bu+'&lost_reason=Lost to Competition&timeframe='+timeframe
                }
              ]
          }
      ]
    } as any);
  }



}
