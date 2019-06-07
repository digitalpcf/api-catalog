import { Component, OnInit } from '@angular/core';
import {AddClient} from 'src/app/components/addclient/addclientlist';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {
  registrationkey: any;
  editField: string;
 
  newclientList: Array<any> = [
    // tslint:disable-next-line:max-line-length
    {  applicationNameToRegister : '', clientApplicationName: '', clientApplicationOwner: '', clientApplicationOwnerEmail: ''  },

   ];
  clientObject: any;
  postclientObject: any;
  constructor(private data: DataService) { }
  addclientList: AddClient[] = [];
  ngOnInit() {
    this.registrationkey = this.data.sendregistrationkey();
    console.log(this.registrationkey);
    this.addclientList = this.addclientList.concat(this.newclientList);
    console.log(this.addclientList);
    this.newclientList = [
      // tslint:disable-next-line:max-line-length
      {  applicationNameToRegister : '', clientApplicationName: '', clientApplicationOwner: '', clientApplicationOwnerEmail: ''   },
  ];
  }
  SavenewclientList(id) {
    console.log('Length of array', this.addclientList.length);
     for (let i = id; i < this.addclientList.length; i++) {
      this.clientObject[i] = {
        applicationNameToRegister: this.addclientList[i].applicationNameToRegister,
        clientApplicationOwner: this.addclientList[i].clientApplicationOwner,
        clientApplicationOwnerEmail: this.addclientList[i].clientApplicationOwnerEmail,
        clientApplicationName: this.addclientList[i].clientApplicationName,
     
      
      };
     console.log(this.clientObject[i]);
     this.postclientObject = this.clientObject[i];
   }
   this.data.addclient(this.postclientObject).subscribe(
    response => console.log(response),
      error => console.log(error),       // error
      () => {console.log('completed');
      window.alert('Row is inserted');
       this.postclientObject = {};
       }
        // complete
 );
  }
  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.addclientList[id][property] = editField;
 //   this.newBeaconList[id][property] = editField;
    console.log(this.addclientList);
  }
  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }
  }
 
