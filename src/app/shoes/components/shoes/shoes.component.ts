import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shoes',
  imports: [RouterLink],
  templateUrl: './shoes.component.html',
  styleUrl: './shoes.component.scss'
})
export class ShoesPageComponent {


  public myObjects = myObjects;


}

export interface MyObject {
  title: string;
  content: string;
  id: number;
}

export const myObjects: MyObject[] = [
  {
      title: 'first',
      content: 'image shoes',
      id: 1
  },
  {
      title: 'second',
      content: 'image shoes',
      id: 2
  },
  {
      title: 'third',
      content: 'image shoes',
      id: 3
  },
  {
      title: 'fourth',
      content: 'image shoes',
      id: 4
  },
  {
      title: 'fifth',
      content: 'image shoes',
      id: 5
  },
]
