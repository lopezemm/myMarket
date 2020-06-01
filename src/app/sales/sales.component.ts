import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, HostListener } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { SaleModel } from '../model/sale-model';
import { SaleServiceService } from '../services/sale-service.service';

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
  tran : {};
  salesArray: SaleModel[] = [];
  sModel = new SaleModel();
  jsonString : {};

  constructor(private changeDetector: ChangeDetectorRef, 
              private productService: ProductServiceService,
              private saleService: SaleServiceService) { }

  ngOnInit(): void {    
  }
  @HostListener('window:beforeunload') collectTransaction() {
    this.sendTransaction();
    console.log(this.salesArray.toString());
  }

  onKey(event: KeyboardEvent) {
    console.log('evento: ' + event.keyCode);
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
   
  }
  private async getPriceValue(){
    let value = this.productService.getProduct(this.getBarcodeValue)
      .subscribe((response: any) => {        
        console.log(JSON.stringify(response));
        this.salesArray.push(this.sModel.toMap(response));
        console.log("ASI VA EL ARRAY: ");
        for (var product of this.salesArray) {
          console.log(product)
     }
        this.jsonString = '{"salesWrapper":' + JSON.stringify(this.salesArray)+ '}';
        console.log(this.jsonString);
        
        this.price = response.price;
        this.name = response.product_name;
        this.total += this.price;      
      });   

  }

  private async sendTransaction(){
    this.saleService.commitTransaction(this.jsonString)
    .subscribe((response: any)=>{
      console.log(response);
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
