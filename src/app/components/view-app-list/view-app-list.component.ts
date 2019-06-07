import { Component, OnInit } from '@angular/core';
import { GetappdetailsService } from 'src/app/services/getappdetails.service';
import { appList } from './applist';
import {Router} from '@angular/router';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-view-app-list',
  templateUrl: './view-app-list.component.html',
  styleUrls: ['./view-app-list.component.css']
})
export class ViewAppListComponent implements OnInit {
  public allappJSONres: any;
  public postappvalue: any;
  registrationkeyfound: any;
  public applist: appList[] = [];
  public appListobject: { applicationName: any; applicationApiUrl: any; applicationOwner: any; applicationOwnerEmail: any; message: any; registrationkey: any; };

  constructor(private _appview: GetappdetailsService,
    private _data: DataService,
    private router: Router) {  }

  ngOnInit() {
    this._appview.GetAllappDetails().subscribe(res=>{
      console.log(res['_body']);
      this.allappJSONres = JSON.parse(res['_body']);
      for (let i = 0; i < this.allappJSONres.length; i++) {
        //  console.log(this.DeviceJSONres[i]);
          this.appListobject = {
            applicationName: this.allappJSONres[i].applicationName,
            applicationApiUrl: this.allappJSONres[i].applicationApiUrl,
            applicationOwner: this.allappJSONres[i].applicationOwner,
            applicationOwnerEmail: this.allappJSONres[i].applicationOwnerEmail,
            message: this.allappJSONres[i].message,
            registrationkey: this.allappJSONres[i].registrationkey
        };
       
        
       //  console.log(this.DeviceListobject);
         this.applist.push(this.appListobject);
       }
    })

    
   
  }
  gotoaddclient(id){
  
    console.log(id);
    for(let i = 0; i< this.applist.length; i++){
      if(i== id){
        this.postappvalue = this.applist[i];
        this.registrationkeyfound = this.applist[i].registrationkey;
      }
      
       else
         console.log("Not found");
          }
  
    console.log(this.postappvalue);
    console.log(this.registrationkeyfound);
    this._data.registrationkeydetail(this.registrationkeyfound);
    this.router.navigate(['/addClient']);
  }
}
