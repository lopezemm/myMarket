import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SalesComponent } from './sales/sales.component';
import { ProductsComponent } from './products/products.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { AdminComponent } from './admin/admin.component';
import { ProductServiceService } from './services/product-service.service';
import { ManageproductsComponent } from './manageproducts/manageproducts.component';
import { AddproductComponent } from './addproduct/addproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SalesComponent,
    ProductsComponent,
    WarehouseComponent,
    AdminComponent,
    ManageproductsComponent,
    AddproductComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: SalesComponent },      
      { path: 'products', component: ProductsComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'products/product/add', component: AddproductComponent},
      
    ])
  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
