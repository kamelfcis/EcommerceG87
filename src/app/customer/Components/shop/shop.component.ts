import { Component } from '@angular/core';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  isloadingproducts = false;
  productList: any[] = [];
  constructor(private pService: ProductService) {

    this.LoadProducts();

  }

  LoadProducts() {
    this.isloadingproducts = true;

    setTimeout(() => {
      this.pService.getProducts().subscribe(
        (data: any) => {
          console.log(data);
          this.productList = data;
          this.isloadingproducts = false;
        },
        (error: any) => {
          console.log(error);

        });
    }, 2000);


  }
}
