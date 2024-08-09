import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
PLATFORM_ID
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {


  constructor( @Inject(PLATFORM_ID) private platformId : object) {}

  ngOnInit():void {



    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem("currentpage","/cart")
    }
  }


}
