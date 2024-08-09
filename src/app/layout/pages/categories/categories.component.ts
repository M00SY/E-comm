import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
PLATFORM_ID
@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {

  categories: any[] = [];

  
  constructor(private http: HttpClient , @Inject(PLATFORM_ID) private platformId : object) {}

  ngOnInit():void {



    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem("currentpage","/categories")
    }
    this.http.get('https://ecommerce.routemisr.com/api/v1/categories').subscribe((response: any) => {
      this.categories = response.data; 
    });
  }
}
