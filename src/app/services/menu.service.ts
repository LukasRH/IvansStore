import { Injectable } from '@angular/core';
import { Pizza } from '../Models/pizza.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  pizzaOne: Pizza = {name: 'Margherita', description: 'Tomat, Ost og Oregano', price: 40};
  pizzaTwo: Pizza = {name: 'Cotto', description: 'Tomat, Ost, Skinke og Oregano', price: 50};
  pizzaThree: Pizza = {name: 'Moro', description: 'Tomat, Ost, Skinke, Champignon og Oregano', price: 55};
  pizzaFour: Pizza = {name: 'Bolognese', description: 'Tomat, Ost, Kødsauce og Oregano', price: 50};
  pizzaFive: Pizza = {name: 'Americano', description: 'Tomat, Ost, Champignon, Pølser og Oregano', price: 50};
  pizzaSix: Pizza = {name: 'Eldorado', description: 'Tomat, Ost, Skinke, Oksekød, Bearnaise sauce og Oregano', price: 60};


  items: Pizza[] = [this.pizzaOne, this.pizzaTwo, this.pizzaThree, this.pizzaFour, this.pizzaFive, this.pizzaSix];

  constructor() { }
}
