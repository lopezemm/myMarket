import { ProductInterface } from './product-model';

export class SaleModel{    
    barcode: String;
    product_name: String;
    price: number;
    sale_price: number;        
    date : Date;
    transactionid: String;
    
    toMap(pModel : ProductInterface){
        let prodToArray = new SaleModel() 
        prodToArray.barcode = pModel.product_code;
        prodToArray.product_name = pModel.product_name;
        prodToArray.price = pModel.price;
        prodToArray.sale_price = pModel.sale_price
        prodToArray.transactionid = "0";
        return prodToArray;
    }
}