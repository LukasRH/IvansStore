import { Component, OnInit, Input } from '@angular/core';
import { PopupService } from 'src/app/services/popup.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  constructor(public popup: PopupService, private cart: CartService) {}

  ngOnInit() {
  }

  addToCart() {
    this.cart.addItem(this.popup.pizza);
    this.popup.showPopUp(false);
  }

}
