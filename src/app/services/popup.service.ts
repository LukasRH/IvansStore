import { Injectable } from '@angular/core';
import { Pizza } from '../Models/pizza.model';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  pizza: Pizza;
  show = false;

  constructor() { }

  setPizza(pizza: Pizza) {
    this.pizza = pizza;
  }

  showPopUp(value: boolean) {
    this.show = value;
  }
}
