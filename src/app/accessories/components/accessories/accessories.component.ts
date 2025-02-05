import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-accessories',
  imports: [RouterLink, FormsModule],
  templateUrl: './accessories.component.html',
  styleUrl: './accessories.component.scss'
})
export class AccessoriesPageComponent {
  public flag_sort: boolean = false;
  
    public flag_filter: boolean = false;
  
    public flag_sales: boolean = false;
  
    public flag_collection: boolean = false;
  
    public flag_gender: boolean = false;
  
    public f_col_25: boolean = false;
  
    public f_col_24: boolean = false;
  
    public f_col_23: boolean = false;
  
    public f_men: boolean = false;
  
    public f_women: boolean = false;
  
    public flag_price: boolean = false;
  
    public flag_apply: boolean = false;
  
    public myObjects = myObjects;
  
    public searchValue: string = '';
  
    public priceFrom: number = 59;
  
    public priceBefore: number = 369;
  
    public lowHigh(): void {
      myObjects.sort((a,b) => a.price < b.price ? -1 : 1);
      this.flag_filter = !this.flag_filter;
      this.flag_sales = false;
    }
    
    public highLow(): void {
      myObjects.sort((a,b) => a.price < b.price ? 1 : -1);
      this.flag_filter = !this.flag_filter;
      this.flag_sales = false;
    }
  
    public fSales(): void{
      this.flag_sales = !this.flag_sales;
      this.flag_filter = !this.flag_filter;
    }
  
    public fCol25(): void {
      this.f_col_25 = !this.f_col_25;
      this.f_col_24 = false;
      this.f_col_23 = false;
      this.flag_filter = !this.flag_filter;
    }
  
    public fCol24(): void {
      this.f_col_24 = !this.f_col_24;
      this.f_col_25 = false;
      this.f_col_23 = false;
      this.flag_filter = !this.flag_filter;
    }
  
    public fCol23(): void {
      this.f_col_23 = !this.f_col_23;
      this.f_col_24 = false;
      this.f_col_25 = false;
      this.flag_filter = !this.flag_filter;
    }
  
    public fMen(): void {
      this.f_men = !this.f_men;
      this.f_women = false;
      this.flag_filter = !this.flag_filter;
    }
  
    public fWomen(): void {
      this.f_women = !this.f_women;
      this.f_men = false;
      this.flag_filter = !this.flag_filter;
    }
  
    public apply(): void {
      if(this.flag_apply == false){
        this.flag_apply = !this.flag_apply;
      }
      this.flag_filter = !this.flag_filter;
    }
  
  }
  
  export interface MyObject {
    price: number;
    sales: string | null;
    content: string;
    id: number;
    mainImage: string;
    name: string;
    collection: string;
    gender: string;
    images: any[];
  }
  
  export const myObjects: MyObject[] = [
    {
        price: 149,
        sales: '10%',
        content: 'image shoes',
        id: 1,
        mainImage: 'assets/images/belt1.jpg',
        name: 'miu miu belt',
        collection: 'collection 2025',
        gender: 'men',
        images: [
          'assets/images/belt1.jpg',
          'assets/images/belt2.jpg',
          'assets/images/belt3.jpg',
          'assets/images/belt4.jpg',
          'assets/images/belt5.jpg',
          'assets/images/belt6.jpg',
          'assets/images/belt7.jpg',
        ],
    },
    {
        price: 99,
        sales: null,
        content: 'image shoes',
        id: 2,
        mainImage: 'assets/images/bag1.jpg',
        name: 'george gina lucy bag',
        collection: 'collection 2024',
        gender: 'women',
        images: [
          'assets/images/bag1.jpg',
          'assets/images/bag2.jpg',
          'assets/images/bag3.jpg',
          'assets/images/bag4.jpg',
          'assets/images/bag5.jpg',
          'assets/images/bag6.jpg',
          'assets/images/bag7.jpg',
        ],
    },
    {
        price: 179,
        sales: null,
        content: 'image shoes',
        id: 3,
        mainImage: 'assets/images/bag1.jpg',
        name: 'george gina lucy bag',
        collection: 'collection 2023',
        gender: 'men',
        images: [
          'assets/images/bag1.jpg',
          'assets/images/bag2.jpg',
          'assets/images/bag3.jpg',
          'assets/images/bag4.jpg',
          'assets/images/bag5.jpg',
          'assets/images/bag6.jpg',
          'assets/images/bag7.jpg',
        ],
    },
    {
        price: 109,
        sales: null,
        content: 'image shoes',
        id: 4,
        mainImage: 'assets/images/belt1.jpg',
        name: 'miu miu belt',
        collection: 'collection 2025',
        gender: 'men',
        images: [
          'assets/images/belt1.jpg',
          'assets/images/belt2.jpg',
          'assets/images/belt3.jpg',
          'assets/images/belt4.jpg',
          'assets/images/belt5.jpg',
          'assets/images/belt6.jpg',
          'assets/images/belt7.jpg',
        ],
    },
    {
        price: 59,
        sales: '25%',
        content: 'image shoes',
        id: 5,
        mainImage: 'assets/images/belt1.jpg',
        name: 'miu miu belt',
        collection: 'collection 2025',
        gender: 'women',
        images: [
          'assets/images/belt1.jpg',
          'assets/images/belt2.jpg',
          'assets/images/belt3.jpg',
          'assets/images/belt4.jpg',
          'assets/images/belt5.jpg',
          'assets/images/belt6.jpg',
          'assets/images/belt7.jpg',
        ],
    },
    {
      price: 369,
      sales: null,
      content: 'image shoes',
      id: 6,
      mainImage: 'assets/images/belt1.jpg',
      name: 'miu miu belt',
      collection: 'collection 2023',
      gender: 'men',
      images: [
        'assets/images/belt1.jpg',
        'assets/images/belt2.jpg',
        'assets/images/belt3.jpg',
        'assets/images/belt4.jpg',
        'assets/images/belt5.jpg',
        'assets/images/belt6.jpg',
        'assets/images/belt7.jpg',
      ],
    },
    {
      price: 69,
      sales: '20%',
      content: 'image shoes',
      id: 7,
      mainImage: 'assets/images/bag1.jpg',
      name: 'george gina lucy bag',
      collection: 'collection 2024',
      gender: 'women',
      images: [
        'assets/images/bag.jpg',
        'assets/images/bag2.jpg',
        'assets/images/bag3.jpg',
        'assets/images/bag4.jpg',
        'assets/images/bag5.jpg',
        'assets/images/bag6.jpg',
        'assets/images/bag7.jpg',
      ],
    },
    {
      price: 263,
      sales: '5%',
      content: 'image shoes',
      id: 8,
      mainImage: 'assets/images/belt1.jpg',
      name: 'miu miu belt',
      gender: 'men',
      collection: 'collection 2024',
      images: [
        'assets/images/belt1.jpg',
        'assets/images/belt2.jpg',
        'assets/images/belt3.jpg',
        'assets/images/belt4.jpg',
        'assets/images/belt5.jpg',
        'assets/images/belt6.jpg',
        'assets/images/belt7.jpg',
      ],
    },
    {
      price: 175,
      sales: null,
      content: 'image shoes',
      id: 9,
      mainImage: 'assets/images/bag1.jpg',
      name: 'george gina lucy bag',
      collection: 'collection 2024',
      gender: 'women',
      images: [
        'assets/images/bag1.jpg',
        'assets/images/bag2.jpg',
        'assets/images/bag3.jpg',
        'assets/images/bag4.jpg',
        'assets/images/bag5.jpg',
        'assets/images/bag6.jpg',
        'assets/images/bag7.jpg',
      ],
    },
  ]
