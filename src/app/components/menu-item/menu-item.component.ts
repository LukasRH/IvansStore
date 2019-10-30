import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pizza } from 'src/app/Models/pizza.model';
import { CartService } from 'src/app/services/cart.service';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() pizza: Pizza;

  constructor(private popup: PopupService) { }

  ngOnInit() {
  }

  AddToCart() {
    this.popup.setPizza(this.pizza);
    this.popup.showPopUp(true);
  }

}
