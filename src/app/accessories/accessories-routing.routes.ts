import { Routes } from "@angular/router";
import { AccessoriesPageComponent } from './components/accessories/accessories.component';
import { ItemAccessoriesComponent } from "./components/item/item.component";

const routes: Routes = [
    {
        path: '',
        component: AccessoriesPageComponent,
        children:[{
            path: ':id',
            component: ItemAccessoriesComponent,
        }]
    }
]

export class AccessoriesPageRouting {
    
}