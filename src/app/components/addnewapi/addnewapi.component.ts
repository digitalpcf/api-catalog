import { Component, OnInit } from '@angular/core';
import {newAPI} from 'src/app/components/addnewapi/newapi';
@Component({
  selector: 'app-addnewapi',
  templateUrl: './addnewapi.component.html',
  styleUrls: ['./addnewapi.component.css']
})
export class AddnewapiComponent implements OnInit {
  submitted = false;
  
  app = new newAPI(' ', ' ',
  ' ',
  ' ');
  constructor() { }

  ngOnInit() {
  }
  onSubmit() { 
    this.submitted = true;
    console.log(this.app); }
}
