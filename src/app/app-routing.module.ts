import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { AvisoComponent } from 'src/app/aviso/aviso.component';
import { MaterialDidaticoComponent } from './material-didatico/material-didatico.component';
import { NotasFaltasComponent } from './notas-faltas/notas-faltas.component';
import { HorarioAulaComponent } from './horario-aula/horario-aula.component';

const routesMain: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent,
  children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'dashboard'
   },
   {
      path: 'aviso',
      component: AvisoComponent
   },
   {
    path: 'material-didatico',
    component: MaterialDidaticoComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent
      },
    {
        path: 'notas-faltas',
        component: NotasFaltasComponent
        },
    {
        path: 'horario-aula',
        component: HorarioAulaComponent
        },
   { path: '**', component: DashboardComponent }
   ] },

  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routesMain)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
