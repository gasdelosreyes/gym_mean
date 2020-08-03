import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ListadoSucursalComponent } from './components/sucursal/listado-sucursal/listado-sucursal.component';
import { ListadoGimnasioComponent } from './components/gimnasio/listado-gimnasio/listado-gimnasio.component';
import { FormularioGimnasioComponent } from './components/gimnasio/formulario-gimnasio/formulario-gimnasio.component';
import { FormularioSucursalComponent } from './components/sucursal/formulario-sucursal/formulario-sucursal.component';
import { NavbarComponent } from './components/comun/navbar/navbar.component';
import { SidebarComponent } from './components/comun/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ListadoSucursalComponent,
    ListadoGimnasioComponent,
    FormularioGimnasioComponent,
    FormularioSucursalComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
