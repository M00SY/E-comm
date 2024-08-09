import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Environment } from '../../../Base/Environment';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent implements OnInit {
  brand: any;

  
  constructor(private http: HttpClient , @Inject(PLATFORM_ID) private platformId : object) {}

  ngOnInit():void {



    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem("currentpage","/brands")
    }


    
    this.http.get(`${Environment.baseURl}/api/v1/brands/64089ceb24b25627a2531596`).subscribe((response: any) => {
      this.brand = response.data; 
    });
  }

}
