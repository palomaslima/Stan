import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './site/home/home.component';
import { HeaderComponent } from './site/header/header.component';
import { PlanosComponent } from './site/planos/planos.component';
import { ContatoComponent } from './site/contato/contato.component';
import { FooterComponent } from './site/footer/footer.component';
import { LoginComponent } from './sistema/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor, ErrorInterceptor } from '../app/sistema/_helpers';

// used to create fake backend
import { fakeBackendProvider } from '../app/sistema/_helpers';
import { SobreComponent } from './site/sobre/sobre.component';
import { IndexSistemaComponent } from './sistema/index-sistema/index-sistema.component';
import { MenuComponent } from './sistema/menu/menu.component';
import { UsuariosComponent } from './sistema/usuarios/usuarios.component';
import { HeaderSistemaComponent } from './sistema/header-sistema/header-sistema.component';
import { MotoristasComponent } from './sistema/motoristas/motoristas.component';
import { VeiculosComponent } from './sistema/veiculos/veiculos.component';
import { AbastecimentoComponent } from './sistema/abastecimento/abastecimento.component';
import { ReservaComponent } from './sistema/reserva/reserva.component';
import { ManutencaoComponent } from './sistema/manutencao/manutencao.component';
import { PneusComponent } from './sistema/pneus/pneus.component';
import { ViagemComponent } from './sistema/viagem/viagem.component';
import { QuilometragemComponent } from './sistema/quilometragem/quilometragem.component';
import { MultasComponent } from './multas/multas.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PlanosComponent,
    ContatoComponent,
    FooterComponent,
    LoginComponent,
    SobreComponent,
    IndexSistemaComponent,
    MenuComponent,
    UsuariosComponent,
    HeaderSistemaComponent,
    MotoristasComponent,
    VeiculosComponent,
    AbastecimentoComponent,
    ReservaComponent,
    ManutencaoComponent,
    PneusComponent,
    ViagemComponent,
    QuilometragemComponent,
    MultasComponent
  ],
  imports: [
    BrowserModule,
    // ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
