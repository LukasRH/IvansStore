import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { CartService } from 'src/app/services/cart.service';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public menu: MenuService) { }

  ngOnInit() {
  }

}
