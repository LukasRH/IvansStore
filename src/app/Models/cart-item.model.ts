import { Pizza } from './pizza.model';

export interface CartItem {
  pizza: Pizza;
  amount: number;
  subtotal: number;
}
