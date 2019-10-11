import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './site/home/home.component';
import { LoginComponent } from './sistema/login/login.component';
import { IndexSistemaComponent } from './sistema/index-sistema/index-sistema.component';
import { UsuariosComponent } from './sistema/usuarios/usuarios.component';
import { MotoristasComponent } from './sistema/motoristas/motoristas.component';
import { VeiculosComponent } from './sistema/veiculos/veiculos.component';
import { AbastecimentoComponent } from './sistema/abastecimento/abastecimento.component';
import { ReservaComponent } from './sistema/reserva/reserva.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admin', component: IndexSistemaComponent},
  {path: 'admin/usuarios', component: UsuariosComponent},
  {path: 'admin/motoristas', component: MotoristasComponent},
  {path: 'admin/veiculos', component: VeiculosComponent},
  {path: 'admin/abastecimento', component: AbastecimentoComponent},
  {path: 'admin/reservas', component: ReservaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
