import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../Model/Postagem';
import { Tema } from '../Model/Tema';
import { User } from '../Model/User';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  postagem: Postagem = new Postagem
  listaPostagens: Postagem[]
  
  tema: Tema = new Tema
  listaTemas: Tema[]
  idTema: number

  user: User = new User()
  nomeUser = environment.nome
  emailUser = environment.email
  idUser = environment.id

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['/login'])           
    }

    this.getAllTemas()
    this.getAllPostagens()
    this.findByNomeUser()
    
  }

  getAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[])=>{
      this.listaPostagens = resp
    })
  }

  findByEmailUser(){
    this.authService.getByEmailUser(this.emailUser).subscribe((resp: User)=>{
      this.user = resp
    })
  }

  findByNomeUser(){
    this.authService.getByNomeUser(this.nomeUser).subscribe((resp: User)=>{
      this.user = resp
    })
  }

  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema)=>{
      this.tema = resp
    })
  }

  getAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[])=>{
      this.listaTemas = resp
    })
  }

  publicar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.user.id = this.idUser
    this.postagem.usuario = this.user

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) =>{
      this.postagem = resp
      alert('Postagem realizada com sucesso!')
      this.postagem = new Postagem()
      this.getAllPostagens()
      this.findByNomeUser()
    })
  }
}
