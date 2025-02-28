import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MyObject, myObjects } from '../shoes/shoes.component';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent implements OnInit{

  public currentIndex: number = 0;
  
  ngOnInit(): void {
    console.log(this.shoe);
    
  }

  private route = inject(ActivatedRoute)

  protected shoe = myObjects[this.route.snapshot.params['id']]

  public goToImage(i: number): void {
    this.currentIndex = i;
  }

  public getImage() {
    return this.shoe.images[this.currentIndex]
  }

  public goToRight(): void {
    const isLastSlide = this.currentIndex === this.shoe.images.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
  
    this.currentIndex = newIndex;
  }

  public goToLeft(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide ? this.shoe.images.length - 1: this.currentIndex - 1;
    this.currentIndex = newIndex;
  }

  
}