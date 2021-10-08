import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { LoginComponent } from './login/login.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { EquipeComponent } from './equipe/equipe.component';
=======
import { PrincipalComponent } from './principal/principal.component';
>>>>>>> f0c887f352b6d7749bc30de2b8d81eea17ae8841


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    LoginComponent,
    CadastrarComponent,
    InicioComponent,
<<<<<<< HEAD
    EquipeComponent
=======
    PrincipalComponent
>>>>>>> f0c887f352b6d7749bc30de2b8d81eea17ae8841
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide:LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
