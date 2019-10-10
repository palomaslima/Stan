import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './site/home/home.component';
import { LoginComponent } from './sistema/login/login.component';
import { IndexSistemaComponent } from './sistema/index-sistema/index-sistema.component';
import { UsuariosComponent } from './sistema/usuarios/usuarios.component';
import { MotoristasComponent } from './sistema/motoristas/motoristas.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admin', component: IndexSistemaComponent},
  {path: 'admin/usuarios', component: UsuariosComponent},
  {path: 'admin/motoristas', component: MotoristasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
