import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SaleModel } from '../model/sale-model';

const headers = {'Content-Type':  'application/json'};

@Injectable({
  providedIn: 'root'
})

export class SaleServiceService {

productUrl = 'http://localhost:8080/';
  

constructor(private http: HttpClient) {
}

commitTransaction(salesArray: any){
  return this.http.post(this.productUrl+'/addTransaction', salesArray, {headers})
}

}
