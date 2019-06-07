import { Component, OnInit } from '@angular/core';
import {ClientList} from '../viewclient/clientList';
import { GetclientService } from 'src/app/services/getclient.service';
import {DataService} from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewclient',
  templateUrl: './viewclient.component.html',
  styleUrls: ['./viewclient.component.css']
})
export class ViewclientComponent implements OnInit {

  clientlist: ClientList[] = [];
  addclient: boolean;
  clientListobject: { clientApplicationName: any; applicationNameToRegister: any; clientApplicationOwner: any; clientApplicationOwnerEmail: any; message: any; registrationKey: any;  };
  allclientsJSONres: any;

  constructor(private _clientview: GetclientService,
    private data: DataService,
    private router: Router) { }

  ngOnInit() {
    this._clientview.GetAllCLientDetails().subscribe(res=>{
      console.log(res['_body']);
      this.allclientsJSONres = JSON.parse(res['_body']);
      for (let i = 0; i < this.allclientsJSONres.length; i++) {
        //  console.log(this.DeviceJSONres[i]);
          this.clientListobject = {
            clientApplicationName: this.allclientsJSONres[i].clientApplicationName,
            applicationNameToRegister: this.allclientsJSONres[i].applicationNameToRegister,
            clientApplicationOwner: this.allclientsJSONres[i].clientApplicationOwner,
            clientApplicationOwnerEmail: this.allclientsJSONres[i].clientApplicationOwnerEmail,
            message: this.allclientsJSONres[i].message,
            registrationKey: this.allclientsJSONres[i].registrationKey
        };
       //  console.log(this.DeviceListobject);
         this.clientlist.push(this.clientListobject);
       }
    })

    
   
  }
 

}
