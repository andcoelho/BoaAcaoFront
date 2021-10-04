import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../Model/User';
import { UserLogin } from '../Model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) {}


  entrar(emailLogin:UserLogin):Observable<UserLogin>{
    return this.http.post<UserLogin>('https://boaacaopi.herokuapp.com/usuario/logar', emailLogin)
  }

  cadastrar(email:User):Observable<User>{
    return this.http.post<User>('https://boaacaopi.herokuapp.com/usuario/cadastrar',email)
  }

  logado(){
    let ok: boolean = false
    if (environment.token != ""){
      ok = true
    }
    return ok

  }
}
