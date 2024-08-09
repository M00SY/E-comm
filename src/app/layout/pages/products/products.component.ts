import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { HomeComponent } from "../home/home.component";
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

    
  constructor( @Inject(PLATFORM_ID) private platformId : object) {}

  ngOnInit():void {



    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem("currentpage","/products")
    }
}}
