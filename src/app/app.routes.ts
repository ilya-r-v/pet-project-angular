import { Routes } from '@angular/router';
import { MainPageComponent } from './main/components/main-page/main-page.component';

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
];
