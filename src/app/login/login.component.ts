import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { data } from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formData: any = {};

  constructor(private http:HttpClient, private dataService : DataService, private routes: Router) { }

  loginData: any;

  ngOnInit() {
  }
  

  //onSubmit() {
   // this.http.post('https://dev100427.service-now.com/api/now/table/u_inbound_demo3_integration', data)
   // .subscribe((result)=>{
   //   console.warn("result",result);
  //  })
   // console.warn(data);

  onSubmit(){
    this.dataService.login(this.formData.email, this.formData.password).subscribe(
      res => {
        console.warn(res);
        //if(res.result.status == "true"){
        //  localStorage.setItem('username', res.result.User_Name)
        //  this.routes.navigate(['/dashboard']);
       // }else{
        //  this.routes.navigate(['/login']);
       // }
      }
    )}
  }
    
 
  
