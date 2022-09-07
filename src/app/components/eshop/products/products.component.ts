import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiProductsService } from 'src/app/services/api-products.service';
import { CartService } from 'src/app/services/cart.service';
import { AsideComponent } from '../aside/aside.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public products: any;
  p: number = 1;

  constructor(
    private api: ApiProductsService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.api.getProductsByCategory('sac').subscribe((res) => {
    //   this.products = res;
    // });

    this.api.getProducts().subscribe((res) => {
      this.products = res;
      this.products.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.Prix });
      });
    });
  }
  addToCart(productItem: any) {
    this.cartService.addToCart(productItem);
    this.router.navigateByUrl('cart');
  }
}
