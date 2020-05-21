import { Component, OnInit } from '@angular/core';
import { ProductInterface } from '../model/product-model';
import { ProductServiceService } from '../services/product-service.service';


@Component({
  selector: 'app-updateprod',
  templateUrl: './updateprod.component.html',
  styleUrls: ['./updateprod.component.css']
})
export class UpdateprodComponent implements OnInit {

  today: number = Date.now();
  prodReturn = true;
  product = {} as ProductInterface;
  barcode : string;
  prodName : string;
  success : boolean;

  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
  }

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
          this.product = response;
          this.prodReturn = false;  
          console.log(JSON.stringify(this.product));                   
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

  async updateProd(){
    let value = this.productService.updateProduct(this.product)
        .subscribe((response: any) =>{          
          console.log(response);          
          this.success = (response.message === 'ok')? true : false;
          this.product = {} as ProductInterface; this.prodReturn = true;  
        });
  }

}
