import { Component, OnInit } from '@angular/core';
import {newAPI} from 'src/app/components/addnewapi/newapi';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-addnewapi',
  templateUrl: './addnewapi.component.html',
  styleUrls: ['./addnewapi.component.css']
})
export class AddnewapiComponent implements OnInit {
  submitted = false;
  
  app = new newAPI(' ',' ',' ',' ');
  constructor(private data: DataService) { }

  ngOnInit() {
  }
  onSubmit() { 
    this.submitted = true;
    console.log(this.app);
    this.data.addnewapi(this.app);
    window.alert("You have successfully added a new application"); }
}
