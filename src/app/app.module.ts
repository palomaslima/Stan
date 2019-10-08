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




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PlanosComponent,
    ContatoComponent,
    FooterComponent,
    LoginComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
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
