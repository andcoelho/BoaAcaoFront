import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
<<<<<<< HEAD
import { EquipeComponent } from './equipe/equipe.component';
=======
import { PrincipalComponent } from './principal/principal.component';
>>>>>>> f0c887f352b6d7749bc30de2b8d81eea17ae8841

const routes: Routes = [

  {path: '', redirectTo: 'login',
  pathMatch: 'full'},

  {path: 'login', component: LoginComponent},
  {path: 'cadastrar', component: CadastrarComponent},
<<<<<<< HEAD

  {path: 'inicio', component: InicioComponent},

  {path: 'equipe', component: EquipeComponent}
=======
  {path: 'inicio', component: InicioComponent},
  {path: 'principal', component: PrincipalComponent},
>>>>>>> f0c887f352b6d7749bc30de2b8d81eea17ae8841
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
