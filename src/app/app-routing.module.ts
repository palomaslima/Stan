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
import { ManutencaoComponent } from './sistema/manutencao/manutencao.component';
import { PneusComponent } from './sistema/pneus/pneus.component';
import { ViagemComponent } from './sistema/viagem/viagem.component';
import { QuilometragemComponent } from './sistema/quilometragem/quilometragem.component';
import { MultasComponent } from './sistema/multas/multas.component';
import { SinistrosComponent } from './sistema/sinistros/sinistros.component';
import { EstoqueComponent } from './sistema/estoque/estoque.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: IndexSistemaComponent},
  {path: 'admin/usuarios', component: UsuariosComponent},
  {path: 'admin/motoristas', component: MotoristasComponent},
  {path: 'admin/veiculos', component: VeiculosComponent},
  {path: 'admin/abastecimento', component: AbastecimentoComponent},
  {path: 'admin/reservas', component: ReservaComponent},
  {path: 'admin/manutencao', component: ManutencaoComponent},
  {path: 'admin/pneus', component: PneusComponent},
  {path: 'admin/viagem', component: ViagemComponent},
  {path: 'admin/quilometragem', component: QuilometragemComponent},
  {path: 'admin/multas', component: MultasComponent},
  {path: 'admin/sinistros', component: SinistrosComponent},
  {path: 'admin/estoque', component: EstoqueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
