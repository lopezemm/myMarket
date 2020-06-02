import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  today : string;

  constructor() { }

  ngOnInit(): void {    
     this.today = new Date().toLocaleDateString()
  }

}
