import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit  {
  //barcode: string;
  @ViewChild("input1") input2: ElementRef;
  barcode = "";
  getBarcodeValue = "";
  price = 0;
  total = 0;
  name : String;
  

  constructor(private changeDetector: ChangeDetectorRef, 
              private productService: ProductServiceService) { }

  ngOnInit(): void {    
  }

  onKey(event: KeyboardEvent) {
    //this.getBarcodeValue.concat(this.barcode).toString();
    event.preventDefault();
    this.changeDetector.detectChanges();
    this.input2.nativeElement.focus();
    this.getBarcodeValue = this.barcode;
    this.barcode = "";
    console.log(this.getBarcodeValue);
    if (this.getBarcodeValue.includes("f")) {
      this.price = Number(this.getBarcodeValue.substr(1));
    } else {
       this.getPriceValue();
       console.log('price '  + this.price)      
    }
    
    console.log('total ' + this.total);
    //this.barcode;
    //if (this.barcode != undefined) {
    //  this.getBarcodeValue.concat(this.barcode).toString();
    //}
    //console.log(this.getBarcodeValue);
    //this.barcode = "";
    //this.barcode = this.getBarcodeValue;    
    //this.barcode = this.getBarcodeValue;
  }
  private async getPriceValue(){
    let value = this.productService.getProduct(this.getBarcodeValue)
      .subscribe((response: any) => {
        //response = JSON.stringify(response);
        console.log(JSON.stringify(response));
        this.price = response.price;
        this.name = response.product_name;
        this.total += this.price;
        //this.product = response;
        //console.log('aqui esta el valor: ' + this.product);
      });   

  }
  open(event) {
    console.log("entor");
    //Hay que meter este codigo en  app.component.htlm para evitar mal focus
    event.preventDefault();
    this.changeDetector.detectChanges();
    this.input2.nativeElement.focus();
  }
}
