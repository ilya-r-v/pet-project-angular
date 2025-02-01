import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { MyChangeBackgroundDirective } from '../../directives/change-background.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-page',
  imports: [NgStyle, MyChangeBackgroundDirective, RouterLink],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})



export class MainPageComponent{

  public slides: any[] = [
    {
      url: "assets/images/col1.jpg",
      title: "collection 2024 winter"
    },
    {
      url: "assets/images/col2.jpg",
      title: "collection 2025 winter"
    },
    {
      url: "assets/images/col3.jpg",
      title: "collection 2024 spring"
    },
    {
      url: "assets/images/col4.jpg",
      title: "collection 2024 autumn"
    },
    {
      url: "assets/images/col5.jpg",
      title: "collection 2024 summer"
    },
    {
      url: "assets/images/col6.jpg",
      title: "collection 2023 winter"
    },
  ]
  

  public currentIndex: number = 0;

  public goToLeft(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide ? this.slides.length - 1: this.currentIndex - 1;
    this.currentIndex = newIndex;
  }

  public getCurrentSlideUrl() {
    return `url('${this.slides[this.currentIndex].url}')`;
  }

  public getTitle() {
    return this.slides[this.currentIndex].title
  }


  public goToRight(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
  
    this.currentIndex = newIndex;
  }

  public goToSlide(i: number): void {
    this.currentIndex = i;
  }

  // public ChangeSize(i: number): void {
  //   if(this.currentIndex == i) {
      
  //   }
  // }

  // public ButtonRight(): string {
    // for (let index = this.ind; index < this.urls.length; index++) {
    //   this.url = this.urls[index];
    //   this.ind++;
    //   if (index == this.urls.length - 1){
    //     this.ind = 0;
    //   }
    //   break;
    // }
    // console.log(this.url);
    // return this.url;
  // }

  // public getCurrentUrl() {
  //   return this.url
  // }

//   public changeBackgroundButton(): string {
//     this.urls.forEach((element, index) => {
//       console.log(element,index)
//       return element
//     })
// }
  
  // public changeBackgroundButton(): string {
  //   console.log(this.urls[Math.floor(Math.random()*this.urls.length)].toString())
  //   return this.urls[Math.floor(Math.random()*this.urls.length)].toString();
  // }

}
