import { Routes } from "@angular/router";
import { ClothesPageComponent } from "./components/clothes/clothes.component";
import { ItemClothesComponent } from "./components/item/item.component";


const routes: Routes = [
    {
        path: '',
        component: ClothesPageComponent,
        children: [{
            path: ':id',
            component: ItemClothesComponent
        }]
    }
];



export class ClothesPageRouting {
    
}