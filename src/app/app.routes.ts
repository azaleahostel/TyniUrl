import { MainMenuComponent } from './dashboard/main-menu/main-menu.component';
import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    component: MainMenuComponent,
    children: [
        {
            path: '',
            loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
        } ]
}];
