import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Referrer-Policy': 'no-referrer-when-downgrade',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Authorization': 'Basic ' + btoa('shubhendru:Shubhendru@123')
    })
  }

  public getSgaCategoryData(postData: any): Observable<any> {
    return this.http.post(environment.API_URL+"api/x_intp_cet_and_fin/cet_finance_sga/sga_category", postData, this.httpOptions)
  }

  public getSgaSummaryData(postData: any): Observable<any> {
    return this.http.post(environment.API_URL+"api/x_intp_cet_and_fin/cet_finance_sga/sga_summary", postData, this.httpOptions)
  }


  public login(username: any, password: any): Observable<any> {
    const params = new URLSearchParams();
    params.set('email', username);
    

    return this.http.post("https://morpheusdev.service-now.com/api/x_intp_cet_and_fin/usergroupvalidation/Grpupcheck?email="+username, params, this.httpOptions)
    // return of({
    //   "result": {
    //       "status": "true",
    //       "message": "Email Not Found",
    //       "details":{
    //        "name": "Shubhendru Raj",
    //        "email": "abc@example.com",
    //        "password": 12345
    //      }
    //   }
  // })
  }




}
