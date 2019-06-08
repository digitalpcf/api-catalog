import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Data } from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  registrationkey: any;
 

  constructor(private http: Http) { }

 // To add a new client for an existing app URL with a returning registration key
  addclient(data: Data): Observable<any>{
     console.log(data);
     const headers = new Headers({ 'Content-Type': 'application/json' });
     const options = new RequestOptions({ headers: headers });
     return this.http.post('https://apicatalog.apps.dev.pcf-aws.com/registerClientForApplication', data, options)
   .pipe(map(res => {}));
  }

  // To add a new application URL
  addnewapi(data: Data): Observable<any>{
    console.log(data);
     const headers = new Headers({ 'Content-Type': 'application/json' });
     const options = new RequestOptions({ headers: headers });
    return this.http.post('https://apicatalog.apps.dev.pcf-aws.com/registerNewApi', data, options)
   .pipe(map(res => {}));
  }

// To receive registration key value for a selected app url from findallapi details
registrationkeydetail(value){
  this.registrationkey = value;
  console.log(this.registrationkey);
}

// Send fetched registration key to add new client component to display it for the new client added
sendregistrationkey(){
  return this.registrationkey;
}
}
