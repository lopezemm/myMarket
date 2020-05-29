import { ProductInterface } from './product-model';

export class SaleModel{    
    barcode: String;
    product_name: String;
    price: number;
    sale_price: number;        
    date : Date;
    transactionid: String;
    
    toMap(pModel : ProductInterface){
        this.barcode = pModel.product_code;
        this.product_name = pModel.product_name;
        this.price = pModel.price;
        this.sale_price = pModel.sale_price
        this.transactionid = "0";
        return this;
    }
}