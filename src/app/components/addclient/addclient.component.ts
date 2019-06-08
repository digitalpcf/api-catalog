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
  
  registrationkey: any;
  
  ngOnInit() {
   
    this.registrationkey = this.data.sendregistrationkey();
    console.log(this.registrationkey);
 
  }
  onSubmit()
   { 
  this.submitted = true;
  console.log(this.client);
  
  this.data.addclient(this.client);
  window.alert("You have successfully added a new client for application with registration key as"+ this.registrationkey);
 }
 
}
  
 
