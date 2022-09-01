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
  selector: 'app-sga',
  templateUrl: './sga.component.html',
  styleUrls: ['./sga.component.scss']
})
export class SgaComponent implements OnInit {

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
  table_headers = [];
  admin_table_data = [];
  Object = Object;
  branch_table_data= [];
  StrategyAndPlanning_table_data= [];
  Corporate_table_data= [];
  Finance_table_data= [];
  HR_table_data= [];
  IT_table_data= [];
  SecretarialAndLegal_table_data= [];
  Management_table_data= [];
  Marketing_table_data= [];
  Quality_table_data= [];
  SupplyChain_table_data= [];
  SIG_table_data= [];
  NBI_table_data= [];
  CTO_table_data= [];
  COO_table_data= [];
  table_headers_sga_sumary = [];
  summary_table_data = [];

  constructor(
    private dataService : DataService
  ){ }
  

  ngOnInit() {
    this.getSgaSummary('H');
    this.getAdminData('H');
    this.getBranchData('H');
    this.getStrategyAndPlanningData('H');
    this.getCorporateData('H');
    this.getFinanceData('H');
    this.getHRData('H');
    this.getITData('H');
    this.getSecretarialAndLegalData('H');
    this.getManagementData('H');
    this.getMarketingData('H');
    this.getQualityData('H');
    this.getSupplyChainData('H');
    this.getSIGData('H');
    this.getNBIData('H');
    this.getCTOData('H');
    this.getCOOData('H');
  }

  ngAfterViewInit(){
  }

  checkActual(val){
    return val.endsWith('-A');
  }

  checkEstimate(val){
    return val.endsWith('-E');
  }

  showTab(evt, cityName, title) {
    this.sgaCategoryTitle = title;
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

    // this.pl_chart_order.reflow();
    // this.pl_chart_sales.reflow();
    // this.pl_chart_gp.reflow();
    // this.pl_chart_op_ex_issc.reflow();
    // this.pl_chart_op_inc_issc.reflow();
    // this.order_analysis_chart.reflow();
    // this.sales_analysis_chart.reflow();
    // this.chart_net_inventory.reflow();
    // this.chart_non_moving_inventory.reflow();
  }

  globalFilter(){
    var timeframe = this.timeframe.nativeElement.value;

    if(timeframe == 'ytd'){
      timeframe = 'H'
    }else if(timeframe == 'Q1'){
      this.timeFilter = 'Q1';
    }else if(timeframe == 'Q2'){
      this.timeFilter = 'Q2';
    }else if(timeframe == 'Q3'){
      this.timeFilter = 'Q3';
    }else if(timeframe == 'Q4'){
      this.timeFilter = 'Q4';
    }else if(timeframe == '1H'){
      this.timeFilter = '1H';
    }else if(timeframe == '2H'){
      this.timeFilter = '2H';
    }else if(timeframe == 'annual'){
      this.timeFilter = 'H';
    }else if(timeframe == 'ytd'){
      this.timeFilter = 'H';
    }else if(timeframe == 'custom'){
      
    }

    this.getSgaSummary(timeframe);
    this.getAdminData(timeframe);
    this.getBranchData(timeframe);
    this.getStrategyAndPlanningData(timeframe);
    this.getCorporateData(timeframe);
    this.getFinanceData(timeframe);
    this.getHRData(timeframe);
    this.getITData(timeframe);
    this.getSecretarialAndLegalData(timeframe);
    this.getManagementData(timeframe);
    this.getMarketingData(timeframe);
    this.getQualityData(timeframe);
    this.getSupplyChainData(timeframe);
    this.getSIGData(timeframe);
    this.getNBIData(timeframe);
    this.getCTOData(timeframe);
    this.getCOOData(timeframe);

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

  getSgaSummary(timeframe){
    var data = {
      "month": timeframe
    }
    this.table_headers_sga_sumary = [];
    this.summary_table_data = [];
    this.dataService.getSgaSummaryData(data).subscribe(
      res => {  
        var sga = res.result.Function;
        for(var key in sga){
          for(var table_head in sga[key]){
            this.table_headers_sga_sumary.push(table_head);
          }
          break;
        }
        for(var row in sga){
          this.summary_table_data.push(sga[row])
        }
      });
  }

  getAdminData(timeframe){
    var data = {
      "desc": "Admin",
      "month": timeframe
    }
    this.table_headers = [];
    this.admin_table_data = [];
    this.dataService.getSgaCategoryData(data).subscribe(
      res => {  
        var sga = res.result.data.sga;
        var sga_split1 = res.result.data.sga_split1;
        var sga_split2 = res.result.data.sga_split2;
        for(var key in sga){
          for(var table_head in sga[key]){
            this.table_headers.push(table_head);
          }
          break;
        }
        for(var row in sga){
          this.admin_table_data.push(sga[row])
        }
        for(var row1 in sga_split1){
          this.admin_table_data.push(sga_split1[row1])
        }
        for(var row2 in sga_split2){
          this.admin_table_data.push(sga_split2[row2])
        }
      });
  }

  getBranchData(timeframe){
    var data = {
      "desc": "Branch",
      "month": timeframe
    }
    this.branch_table_data = [];
    this.dataService.getSgaCategoryData(data).subscribe(
      res => {  
        var sga = res.result.data.sga;
        var sga_split1 = res.result.data.sga_split1;
        var sga_split2 = res.result.data.sga_split2;
        for(var row in sga){
          this.branch_table_data.push(sga[row])
        }
        for(var row1 in sga_split1){
          this.branch_table_data.push(sga_split1[row1])
        }
        for(var row2 in sga_split2){
          this.branch_table_data.push(sga_split2[row2])
        }
      });
  }

  getStrategyAndPlanningData(timeframe){
    var data = {
      "desc": "Strategy and Planning",
      "month": timeframe
    }
    this.StrategyAndPlanning_table_data = [];
    this.dataService.getSgaCategoryData(data).subscribe(
      res => {  
        var sga = res.result.data.sga;
        var sga_split1 = res.result.data.sga_split1;
        var sga_split2 = res.result.data.sga_split2;
        for(var row in sga){
          this.StrategyAndPlanning_table_data.push(sga[row])
        }
        for(var row1 in sga_split1){
          this.StrategyAndPlanning_table_data.push(sga_split1[row1])
        }
        for(var row2 in sga_split2){
          this.StrategyAndPlanning_table_data.push(sga_split2[row2])
        }
      });
  }

  getCorporateData(timeframe){
    var data = {
      "desc": "Corporate",
      "month": timeframe
    }
    this.Corporate_table_data = [];
    this.dataService.getSgaCategoryData(data).subscribe(
      res => {  
        var sga = res.result.data.sga;
        var sga_split1 = res.result.data.sga_split1;
        var sga_split2 = res.result.data.sga_split2;
        for(var row in sga){
          this.Corporate_table_data.push(sga[row])
        }
        for(var row1 in sga_split1){
          this.Corporate_table_data.push(sga_split1[row1])
        }
        for(var row2 in sga_split2){
          this.Corporate_table_data.push(sga_split2[row2])
        }
      });
  }

  getFinanceData(timeframe){
    var data = {
      "desc": "Finance",
      "month": timeframe
    }
    this.Finance_table_data = [];
    this.dataService.getSgaCategoryData(data).subscribe(
      res => {  
        var sga = res.result.data.sga;
        var sga_split1 = res.result.data.sga_split1;
        var sga_split2 = res.result.data.sga_split2;
        for(var row in sga){
          this.Finance_table_data.push(sga[row])
        }
        for(var row1 in sga_split1){
          this.Finance_table_data.push(sga_split1[row1])
        }
        for(var row2 in sga_split2){
          this.Finance_table_data.push(sga_split2[row2])
        }
      });
  }

  getHRData(timeframe){
    var data = {
      "desc": "HR",
      "month": timeframe
    }
    this.HR_table_data = [];
    this.dataService.getSgaCategoryData(data).subscribe(
      res => {  
        var sga = res.result.data.sga;
        var sga_split1 = res.result.data.sga_split1;
        var sga_split2 = res.result.data.sga_split2;
        for(var row in sga){
          this.HR_table_data.push(sga[row])
        }
        for(var row1 in sga_split1){
          this.HR_table_data.push(sga_split1[row1])
        }
        for(var row2 in sga_split2){
          this.HR_table_data.push(sga_split2[row2])
        }
      });
  }

  getITData(timeframe){
    var data = {
      "desc": "IT",
      "month": timeframe
    }
    this.IT_table_data = [];
    this.dataService.getSgaCategoryData(data).subscribe(
      res => {  
        var sga = res.result.data.sga;
        var sga_split1 = res.result.data.sga_split1;
        var sga_split2 = res.result.data.sga_split2;
        for(var row in sga){
          this.IT_table_data.push(sga[row])
        }
        for(var row1 in sga_split1){
          this.IT_table_data.push(sga_split1[row1])
        }
        for(var row2 in sga_split2){
          this.IT_table_data.push(sga_split2[row2])
        }
      });
  }

  getSecretarialAndLegalData(timeframe){
    var data = {
      "desc": "Secretarial & Legal",
      "month": timeframe
    }
    this.SecretarialAndLegal_table_data = [];
    this.dataService.getSgaCategoryData(data).subscribe(
      res => {  
        var sga = res.result.data.sga;
        var sga_split1 = res.result.data.sga_split1;
        var sga_split2 = res.result.data.sga_split2;
        for(var row in sga){
          this.SecretarialAndLegal_table_data.push(sga[row])
        }
        for(var row1 in sga_split1){
          this.SecretarialAndLegal_table_data.push(sga_split1[row1])
        }
        for(var row2 in sga_split2){
          this.SecretarialAndLegal_table_data.push(sga_split2[row2])
        }
      });
  }

  getManagementData(timeframe){
    var data = {
      "desc": "Management",
      "month": timeframe
    }
    this.Management_table_data = [];
    this.dataService.getSgaCategoryData(data).subscribe(
      res => {  
        var sga = res.result.data.sga;
        var sga_split1 = res.result.data.sga_split1;
        var sga_split2 = res.result.data.sga_split2;
        for(var row in sga){
          this.Management_table_data.push(sga[row])
        }
        for(var row1 in sga_split1){
          this.Management_table_data.push(sga_split1[row1])
        }
        for(var row2 in sga_split2){
          this.Management_table_data.push(sga_split2[row2])
        }
      });
  }

  getMarketingData(timeframe){
    var data = {
      "desc": "Marketing",
      "month": timeframe
    }
    this.Marketing_table_data = [];
    this.dataService.getSgaCategoryData(data).subscribe(
      res => {  
        var sga = res.result.data.sga;
        var sga_split1 = res.result.data.sga_split1;
        var sga_split2 = res.result.data.sga_split2;
        for(var row in sga){
          this.Marketing_table_data.push(sga[row])
        }
        for(var row1 in sga_split1){
          this.Marketing_table_data.push(sga_split1[row1])
        }
        for(var row2 in sga_split2){
          this.Marketing_table_data.push(sga_split2[row2])
        }
      });
  }

  getQualityData(timeframe){
    var data = {
      "desc": "Quality",
      "month": timeframe
    }
    this.Quality_table_data = [];
    this.dataService.getSgaCategoryData(data).subscribe(
      res => {  
        var sga = res.result.data.sga;
        var sga_split1 = res.result.data.sga_split1;
        var sga_split2 = res.result.data.sga_split2;
        for(var row in sga){
          this.Quality_table_data.push(sga[row])
        }
        for(var row1 in sga_split1){
          this.Quality_table_data.push(sga_split1[row1])
        }
        for(var row2 in sga_split2){
          this.Quality_table_data.push(sga_split2[row2])
        }
      });
  }

  getSupplyChainData(timeframe){
    var data = {
      "desc": "Supply Chain",
      "month": timeframe
    }
    this.SupplyChain_table_data = [];
    this.dataService.getSgaCategoryData(data).subscribe(
      res => {  
        var sga = res.result.data.sga;
        var sga_split1 = res.result.data.sga_split1;
        var sga_split2 = res.result.data.sga_split2;
        for(var row in sga){
          this.SupplyChain_table_data.push(sga[row])
        }
        for(var row1 in sga_split1){
          this.SupplyChain_table_data.push(sga_split1[row1])
        }
        for(var row2 in sga_split2){
          this.SupplyChain_table_data.push(sga_split2[row2])
        }
      });
  }

  getSIGData(timeframe){
    var data = {
      "desc": "SIG",
      "month": timeframe
    }
    this.SIG_table_data = [];
    this.dataService.getSgaCategoryData(data).subscribe(
      res => {  
        var sga = res.result.data.sga;
        var sga_split1 = res.result.data.sga_split1;
        var sga_split2 = res.result.data.sga_split2;
        for(var row in sga){
          this.SIG_table_data.push(sga[row])
        }
        for(var row1 in sga_split1){
          this.SIG_table_data.push(sga_split1[row1])
        }
        for(var row2 in sga_split2){
          this.SIG_table_data.push(sga_split2[row2])
        }
      });
  }

  getNBIData(timeframe){
    var data = {
      "desc": "NBI",
      "month": timeframe
    }
    this.NBI_table_data = [];
    this.dataService.getSgaCategoryData(data).subscribe(
      res => {  
        var sga = res.result.data.sga;
        var sga_split1 = res.result.data.sga_split1;
        var sga_split2 = res.result.data.sga_split2;
        for(var row in sga){
          this.NBI_table_data.push(sga[row])
        }
        for(var row1 in sga_split1){
          this.NBI_table_data.push(sga_split1[row1])
        }
        for(var row2 in sga_split2){
          this.NBI_table_data.push(sga_split2[row2])
        }
      });
  }

  getCTOData(timeframe){
    var data = {
      "desc": "CTO",
      "month": timeframe
    }
    this.CTO_table_data = [];
    this.dataService.getSgaCategoryData(data).subscribe(
      res => {  
        var sga = res.result.data.sga;
        var sga_split1 = res.result.data.sga_split1;
        var sga_split2 = res.result.data.sga_split2;
        for(var row in sga){
          this.CTO_table_data.push(sga[row])
        }
        for(var row1 in sga_split1){
          this.CTO_table_data.push(sga_split1[row1])
        }
        for(var row2 in sga_split2){
          this.CTO_table_data.push(sga_split2[row2])
        }
      });
  }

  getCOOData(timeframe){
    var data = {
      "desc": "COO",
      "month": timeframe
    }
    this.COO_table_data = [];
    this.dataService.getSgaCategoryData(data).subscribe(
      res => {  
        var sga = res.result.data.sga;
        var sga_split1 = res.result.data.sga_split1;
        var sga_split2 = res.result.data.sga_split2;
        for(var row in sga){
          this.COO_table_data.push(sga[row])
        }
        for(var row1 in sga_split1){
          this.COO_table_data.push(sga_split1[row1])
        }
        for(var row2 in sga_split2){
          this.COO_table_data.push(sga_split2[row2])
        }
      });
  }




}
