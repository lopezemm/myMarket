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
  prodReturn = true;
  product = {} as ProductInterface;
  barcode : string;
  prodName : string;
  success : boolean;

  constructor(private productService: ProductServiceService) { }
  

  findService(){
    if(this.barcode)
      this.getProduct()
    if(this.prodName)  
      this.getProductByName()
      this.prodName ="";       
  }

  async getProduct(){     
      let value = this.productService.getProduct(this.barcode)
        .subscribe((response: ProductInterface) => {
          //response = JSON.stringify(response);
          //console.log(JSON.stringify(response));
          this.product = response;
          this.prodReturn = false;  
          console.log(JSON.stringify(this.product));
         
          //this.product = response;
          //console.log('aqui esta el valor: ' + this.product);
        });   
       
  }

  async getProductByName(){
    let value = this.productService.getProductByName(this.prodName)
        .subscribe((response: ProductInterface) => {          
          this.product = response;
          this.prodReturn = false;  
          console.log(JSON.stringify(this.product));                   
        });   
  }

  async deleleProd(){
    let value = this.productService.deleteProduct(this.product.product_code)
        .subscribe((response: any) =>{          
          console.log(response);
          this.success = (response.message === 'ok')? true : false;
          this.product = {} as ProductInterface; this.prodReturn = true;  
        });
  }
}
