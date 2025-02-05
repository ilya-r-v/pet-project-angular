import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { myObjects } from '../clothes/clothes.component';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemClothesComponent implements OnInit{

  public currentIndex: number = 0;
  
  ngOnInit(): void {
    console.log(this.clothes);
    
  }

  private route = inject(ActivatedRoute)

  protected clothes = myObjects[this.route.snapshot.params['id']]

  public goToImage(i: number): void {
    this.currentIndex = i;
  }

  public getImage() {
    return this.clothes.images[this.currentIndex]
  }

  public goToRight(): void {
    const isLastSlide = this.currentIndex === this.clothes.images.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
  
    this.currentIndex = newIndex;
  }

  public goToLeft(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide ? this.clothes.images.length - 1: this.currentIndex - 1;
    this.currentIndex = newIndex;
  }

  
}
