import { Injectable, EventEmitter } from '@angular/core';
import { Pizza } from '../Models/pizza.model';
import { CartItem } from '../Models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: CartItem[] = [];
  cartCount = 0;
  totalAmount = 0;
  errorMsg: string;

  cartSizeEvent: EventEmitter<number> = new EventEmitter();

  constructor() {
    this.cartSizeEvent.emit(0);
  }

  addItem(item: Pizza) {
    if (this.cartCount < 6) {
      const index = this.items.findIndex(cartItem => cartItem.pizza === item);

      if (index >= 0) {
        this.items[index].amount += 1;
        this.items[index].subtotal += item.price;
      } else {
        this.items.push({pizza: item, amount: 1, subtotal: item.price});
      }

      this.totalAmount += item.price;
      this.cartSizeEvent.emit(++this.cartCount);
    } else {
      this.errorMsg = 'Your cart is full, you can only add 6 items.';
    }
  }

  removeItem(item: CartItem) {
    const index = this.items.indexOf(item);
    if (index >= 0) {
      if (this.items[index].amount > 1) {
        this.items[index].amount -= 1;
        this.items[index].subtotal -= this.items[index].pizza.price;
      } else {
        this.items.splice(index, 1);
      }
    }
    this.totalAmount -= item.pizza.price;
    this.cartSizeEvent.emit(--this.cartCount);
    this.errorMsg = null;
  }
}
