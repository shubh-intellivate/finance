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
  hideError: any = true;

  ngOnInit() {
  }
  
  onSubmit(){
    this.dataService.login(this.formData.email, this.formData.password).subscribe(
      res => {
        console.log(res);
        if(res.result.status == "True"){
          this.hideError = true;
         localStorage.setItem('isLoggedIn', "true")
         localStorage.setItem('groups', res.result.result.groups)
         this.routes.navigate(['/dashboard']);
       }else{
          this.hideError = false;
          this.routes.navigate(['/login']);
       }
      }
    )}
  }
    
 
  
