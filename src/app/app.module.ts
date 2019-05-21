import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AvisoComponent } from './aviso/aviso.component';
import { MaterialDidaticoComponent } from './material-didatico/material-didatico.component';
import { NotasFaltasComponent } from './notas-faltas/notas-faltas.component';
import { HorarioAulaComponent } from './horario-aula/horario-aula.component';
import { CalendarioAcademicoComponent } from './calendario-academico/calendario-academico.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    LoginComponent,
    HeaderComponent,
    MainComponent,
    DashboardComponent,
    AvisoComponent,
    MaterialDidaticoComponent,
    NotasFaltasComponent,
    HorarioAulaComponent,
    CalendarioAcademicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  exports: [CalendarioAcademicoComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
