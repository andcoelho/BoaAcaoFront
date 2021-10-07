import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../Model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailLogin: UserLogin = new UserLogin()

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }
  entrar(){
    this.auth.entrar(this.emailLogin).subscribe((resp:UserLogin)=>{
    this.emailLogin=resp
    
    environment.token = this.emailLogin.token
    environment.nome = this.emailLogin.nome
    environment.foto = this.emailLogin.foto
    environment.id = this.emailLogin.id
  
    console.log(environment.token)
    console.log(environment.nome)
    console.log(environment.foto)
    console.log(environment.id)
  
    this.router.navigate(['/principal'])
    }, erro => {
        if(erro.status ==500){
          alert("Usuario ou senha estão incorretos!")
        }
      })
    }
}
