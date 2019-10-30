import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showBadge: boolean;
  number: number;
  showCart = false;

  constructor(private cart: CartService) {
    this.cart.cartSizeEvent.subscribe((size: number) => {
      if (size > 0) {
        this.showBadge = true;
      } else {
        this.showBadge = false;
      }
      this.number = size;
    });
  }

  ngOnInit() {
  }

  toggleCart() {
    this.showCart = !this.showCart;
  }

}
