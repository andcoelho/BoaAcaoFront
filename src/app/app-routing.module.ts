import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';

import { EquipeComponent } from './equipe/equipe.component';

import { PrincipalComponent } from './principal/principal.component';
<<<<<<< HEAD
import { MenulogadoComponent } from './menulogado/menulogado.component';
=======
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
>>>>>>> d1b66e9d33772c4f46ef767f71e7b91dbdcafbc4
 

const routes: Routes = [

  {path: '', redirectTo: 'inicio', pathMatch: 'full'},

  {path: 'login', component: LoginComponent},
  {path: 'cadastrar', component: CadastrarComponent},

  {path: 'equipe', component: EquipeComponent},

  {path: 'inicio', component: InicioComponent},
  {path: 'principal', component: PrincipalComponent},
<<<<<<< HEAD

  {path: 'menulog', component: MenulogadoComponent}
  ];
=======
  {path: 'postagem-edit/:id', component: PostagemEditComponent},
  {path: 'postagem-delete/:id', component: PostagemDeleteComponent}
];
>>>>>>> d1b66e9d33772c4f46ef767f71e7b91dbdcafbc4

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
