import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from 'src/app/Models/pizza.model';
import { CartItem } from 'src/app/Models/cart-item.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() item: CartItem;
  pizza: Pizza;

  constructor(private cart: CartService) { }

  ngOnInit() {
    this.pizza = this.item.pizza;
  }

  remove() {
    this.cart.removeItem(this.item);
  }

  add() {
    this.cart.addItem(this.item.pizza);
  }
}
