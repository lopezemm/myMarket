import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

const headers = {'Content-Type':  'application/json'};

@Injectable({
  providedIn: 'root'
})

export class ProductServiceService {
  productUrl = 'http://localhost:8080/';
  

  constructor(private http: HttpClient) {
  }

  getProduct(product_code) {
    return this.http.get(this.productUrl + 'getProduct/' + product_code);
  }

  addProduct(product){
    return this.http.post(this.productUrl + 'addProduct', product, { headers });
  }

  getProductByName(name){
    return this.http.get(this.productUrl + 'searchProduct/' + name);
  }

  deleteProduct(product_code){
    return this.http.post(this.productUrl + 'deleteProd/' + product_code, { headers });
  }

  updateProduct(product){
    return this.http.post(this.productUrl + 'updateProd/', product, {headers});
  }

}
