import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { AvisoComponent } from 'src/app/aviso/aviso.component';

const routesMain: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent,
  children: [
    {
      path: '',
      component: DashboardComponent
   },
   {
      path: 'aviso',
      component: AvisoComponent
   },

   { path: '**', component: DashboardComponent }
   ] },

  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forChild(routesMain)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
