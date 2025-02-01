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
  
  ngOnInit(): void {
    console.log(this.shoe);
    
  }

  private route = inject(ActivatedRoute)

  protected shoe = myObjects[this.route.snapshot.params['id']]

  
}