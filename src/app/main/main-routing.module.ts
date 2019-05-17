import { DashboardComponent } from '../dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';



const routes: Routes = [
    { path: 'main/dashboard', pathMatch: 'full', redirectTo: 'dashboard' },
    { path: 'main', pathMatch: 'full', redirectTo: 'dashboard' },
    { path: 'main/dashboard', component: DashboardComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class MainRoutingModule{}