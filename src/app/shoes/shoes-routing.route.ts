import { Routes } from "@angular/router";
import { ShoesPageComponent } from "./components/shoes/shoes.component";
import { ItemComponent } from "./components/item/item.component";

const routes: Routes = [
    {
        path: '',
        component: ShoesPageComponent,
        children: [{
            path: ':id',
            component: ItemComponent
        }]
    },
    
];

export class ShoesPageRouting {
    
}