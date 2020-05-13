import { Component, OnInit } from '@angular/core';
import {formatDate} from '@angular/common';
import { ProductInterface } from '../model/product-model';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {
  today: number = Date.now();
  prodReturn = false;
  product = {} as ProductInterface;
  barcode : string;

  constructor(private productService: ProductServiceService) { }


  getFlag(){
    this.prodReturn = true;  
  }

  async getProduct(){     
      let value = this.productService.getProduct(this.barcode)
        .subscribe((response: ProductInterface) => {
          //response = JSON.stringify(response);
          //console.log(JSON.stringify(response));
          this.product = response;
          console.log(JSON.stringify(this.product));
         
          //this.product = response;
          //console.log('aqui esta el valor: ' + this.product);
        });   
       
  }

}
