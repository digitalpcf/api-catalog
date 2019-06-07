import { Component, OnInit } from '@angular/core';
import {AddClient} from 'src/app/components/addclient/addclientlist';
import { DataService } from 'src/app/services/data.service';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {
  submitted = false;
  
  client: AddClient[] = [];
  constructor(private data: DataService) { 
 
    
  }
  
 /* registrationkey: any;
  editField: string;
 
  newclientList: Array<any> = [
    // tslint:disable-next-line:max-line-length
    {  applicationNameToRegister : '', clientApplicationName: '', clientApplicationOwner: '', clientApplicationOwnerEmail: ''  },

   ];
  clientObject: any;
  postclientObject: any;
  
  addclientList: AddClient[] = [];*/
  ngOnInit() {
   
   /* this.registrationkey = this.data.sendregistrationkey();
    console.log(this.registrationkey);
    this.addclientList = this.addclientList.concat(this.newclientList);
    console.log(this.addclientList);
    */
  }
  onSubmit()
   { 
  this.submitted = true;
  console.log(this.client);
 }
 /* updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.addclientList[id][property] = editField;
 
   // console.log(this.addclientList);
  }
  SaveClientDetails(id) {
    console.log('Length of array', this.addclientList.length);
     for (let i = id; i < this.addclientList.length; i++) {
      this.clientObject = {
        applicationNameToRegister: this.addclientList[i].applicationNameToRegister,
        clientApplicationOwner: this.addclientList[i].clientApplicationOwner,
        clientApplicationOwnerEmail: this.addclientList[i].clientApplicationOwnerEmail,
        clientApplicationName: this.addclientList[i].clientApplicationName,
     
      
      };
     console.log(this.clientObject);
     this.postclientObject = this.clientObject;
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
 this.newclientList = [
  // tslint:disable-next-line:max-line-length
  {  applicationNameToRegister : '', clientApplicationName: '', clientApplicationOwner: '', clientApplicationOwnerEmail: ''   },
];
  }
 
  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }*/
 /* get values() { 
    return JSON.stringify(this.client); 
     console.log(this.client);
}*/
}
  
 
