import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetclientService {

  constructor( private http: Http) {
    console.log('getclient Services Initialized...');
   }
  
  GetAllCLientDetails(){
    console.log("Hi");
    return this.http.get('https://apicatalog.apps.dev.pcf-aws.com/findAllRegisteredClient')
      .pipe(map(result => result));
  }
}
