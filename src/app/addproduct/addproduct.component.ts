import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { FormGroup, FormControl, Form } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {  
  
  statusOk : boolean;
  statusError : boolean;
  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
  }

  onKeyUp(event: KeyboardEvent) {
    //adfassdf
  }

  async save(product : Form){    
    this.productService.addProduct(product).subscribe((result: any) => {            
      alert(result.message);
      (result.message && result.message=='ok') ? this.statusOk =true : this.statusOk =false;
      
    }, (err) => {
      this.statusOk = false;
      this.statusError = true;
      console.log(err);           
    });
    console.log(product);

  }

}
