import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartComponent } from './cart/cart.component';
import { MenuComponent } from './menu/menu.component';
import { PopupComponent } from './popup/popup.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [FooterComponent, MenuItemComponent, CartItemComponent, CartComponent, MenuComponent, PopupComponent, HeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [FooterComponent, MenuItemComponent, CartItemComponent, CartComponent, MenuComponent, PopupComponent, HeaderComponent]
})
export class ComponentsModule { }
