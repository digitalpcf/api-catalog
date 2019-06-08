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

 
  addclient(data: Data): Observable<any>{
    
      console.log(data);
      
     
   const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
   
  
   return this.http.post('https://apicatalog.apps.dev.pcf-aws.com/registerClientForApplication', data, options)
   .pipe(map(res => {}));
  }
  

registrationkeydetail(value){
  this.registrationkey = value;
  console.log(this.registrationkey);
}
sendregistrationkey(){
  return this.registrationkey;
}
}
