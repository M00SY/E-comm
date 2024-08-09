import { HttpClient } from '@angular/common/http';
// import { ProductService } from './../../../shared/services/product.service';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Environment } from '../../../Base/Environment';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  
  products: any[] = [];

  
  constructor(private http: HttpClient , @Inject(PLATFORM_ID) private platformId : object) {}

  ngOnInit():void {



    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem("currentpage","/home")
    }
    this.http.get(`${Environment.baseURl}/api/v1/products`).subscribe((response: any) => {
      this.products = response.data; 
    });
  }

}

