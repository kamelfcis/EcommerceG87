import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ShopComponent } from './Components/shop/shop.component';
import { ShopDetailComponent } from './Components/shop-detail/shop-detail.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';

const routes: Routes = [
  
   
  {
    path: '', component: HomeComponent, children: [
      { path: 'shop', component: ShopComponent },
      { path: 'shop-detail', component: ShopDetailComponent },
      { path: 'contact-us', component: ContactUsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
