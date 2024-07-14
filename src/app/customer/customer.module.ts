import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { ShopComponent } from './Components/shop/shop.component';
import { ShopDetailComponent } from './Components/shop-detail/shop-detail.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { CartComponent } from './Components/cart/cart.component';
import { HomeComponent } from './Components/home/home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ShopComponent,
    ShopDetailComponent,
    ContactUsComponent,
    CartComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule
  ]
})
export class CustomerModule { }
