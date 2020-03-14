import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

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

}