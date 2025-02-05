import { Routes } from '@angular/router';
import { MainPageComponent } from './main/components/main-page/main-page.component';
import { ShoesPageComponent } from './shoes/components/shoes/shoes.component';
import { ClothesPageComponent } from './clothes/components/clothes/clothes.component';
import { AccessoriesPageComponent } from './accessories/components/accessories/accessories.component';
import { ItemComponent } from './shoes/components/item/item.component';
import { ItemClothesComponent } from './clothes/components/item/item.component';
import { ItemAccessoriesComponent } from './accessories/components/item/item.component';

export const routes: Routes = [
    {
        path: '', redirectTo:'MainPageComponent', pathMatch: 'full'
    },
    {
        path: '',
        component: MainPageComponent,
    },
    {
        path: 'homepage',
        component: MainPageComponent,
    },
    {
        path: 'shoes',
        component: ShoesPageComponent,
        pathMatch: 'full',
    },
    {
        path: 'shoes/:id',
        component: ItemComponent
    },
    {
        path: 'clothes/:id',
        component: ItemClothesComponent
    },
    {
        path: 'clothes',
        component: ClothesPageComponent,
    },
    {
        path: 'accessories',
        component: AccessoriesPageComponent,
    },
    {
        path: 'accessories/:id',
        component: ItemAccessoriesComponent
    },
];
