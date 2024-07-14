import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isSidedrawerHidden = false;

  categoriesList = [

    {
      name: 'Setting', icon: 'fa-solid fa-gear', isOpen: false,
      items: [
        { name: 'Categories', link: 'categories',icon:'fa-solid fa-gear' },
        { name: 'Products', link: 'products',icon:'fa-solid fa-gear' }

      ]
    },
    {
      name: 'Sales', icon: 'fas fa-folder', isOpen: false,
      items: [
        { name: 'View All Carts', link: 'sdsdsd',icon:'fa-solid fa-cart-shopping' },
        { name: 'Cancelled Orders', link: 'products',icon:'fa-solid fa-gear' }

      ]
    }





  ]

  togglesidedrawer() {
    
    this.isSidedrawerHidden = !this.isSidedrawerHidden;
  }
  toggleCategory(index: number) {
    


    this.categoriesList[index].isOpen=!this.categoriesList[index].isOpen;
  }
}
