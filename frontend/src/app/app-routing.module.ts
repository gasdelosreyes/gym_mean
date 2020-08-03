import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ListadoSucursalComponent } from './components/sucursal/listado-sucursal/listado-sucursal.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "prueba", component: ListadoSucursalComponent },
  { path: "register", component: RegisterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
