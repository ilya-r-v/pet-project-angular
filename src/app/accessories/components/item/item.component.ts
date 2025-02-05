import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { myObjects } from '../accessories/accessories.component';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemAccessoriesComponent {
public currentIndex: number = 0;
  
  ngOnInit(): void {
    console.log(this.accessory);
    
  }

  private route = inject(ActivatedRoute)

  protected accessory = myObjects[this.route.snapshot.params['id']]

  public goToImage(i: number): void {
    this.currentIndex = i;
  }

  public getImage() {
    return this.accessory.images[this.currentIndex]
  }

  public goToRight(): void {
    const isLastSlide = this.currentIndex === this.accessory.images.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
  
    this.currentIndex = newIndex;
  }

  public goToLeft(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide ? this.accessory.images.length - 1: this.currentIndex - 1;
    this.currentIndex = newIndex;
  }

}
