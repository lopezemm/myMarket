import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  addProdFlag = true;
  constructor() { }

  ngOnInit(): void {
  }

  onKey(event: KeyboardEvent) {

    document.getElementById("nombre").focus;     

  }

  save(product){    

    console.log(product);

  }

}
