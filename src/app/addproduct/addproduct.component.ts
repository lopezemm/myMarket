import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {  
  
  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp(event: KeyboardEvent) {
    //adfassdf
  }

  save(product){    
    
    console.log(product);

  }

}
