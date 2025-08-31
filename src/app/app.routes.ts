import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard';


export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: 'dashboard' },
];
