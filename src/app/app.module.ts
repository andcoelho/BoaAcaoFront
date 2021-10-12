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

import { EquipeComponent } from './equipe/equipe.component';

import { PrincipalComponent } from './principal/principal.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
<<<<<<< HEAD
import { MenulogadoComponent } from './menulogado/menulogado.component';
=======
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
>>>>>>> d1b66e9d33772c4f46ef767f71e7b91dbdcafbc4



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    LoginComponent,
    CadastrarComponent,
    InicioComponent,
    EquipeComponent,
    PrincipalComponent,
<<<<<<< HEAD

    PostagemDeleteComponent,
      MenulogadoComponent
=======
    PostagemEditComponent,
    PostagemDeleteComponent
>>>>>>> d1b66e9d33772c4f46ef767f71e7b91dbdcafbc4

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [{
    provide:LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
