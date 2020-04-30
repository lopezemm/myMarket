import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {  
  
  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
  }

  onKeyUp(event: KeyboardEvent) {
    //adfassdf
  }

  save(product){    
    this.productService.addProduct(product);
    console.log(product);

  }

}
