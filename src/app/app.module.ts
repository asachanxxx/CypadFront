import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './/app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LayoutModule } from './/layouts/layout.module';
import { ScriptLoaderService } from './_services/script-loader.service';
import { CustomerComponent } from './cypad/customer/customer.component';
import { ProductsComponent } from './cypad/products/products.component';
import { OrdersComponent } from './cypad/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ProductsComponent,
    OrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
  ],
  providers: [ScriptLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
