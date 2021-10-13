import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/User';
import { AuthService } from 'src/app/service/auth.service';



@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class  UserEditComponent implements OnInit {
  [x: string]: any;

  user: User = new User
  confirmarSenha: string

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(){ 
    window.scroll(0,0)
  }

  confirmSenha(event: any){
    this.confirmarSenha = event.target.value
  }

  atualizar(){   

    if(this.user.senha != this.confirmarSenha){
      alert('As senhas estão incorretas')
    } else {
      this.authService.atualizar(this.user).subscribe((resp: User) => {
        this.user = resp
        alert('Usuário cadastrado com sucesso!')
        this.router.navigate(['/login'])
      })
    }
  }
  findByIdUser(id: number) {
    this.authService.getByUser(id).subscribe((resp : User) => {
      this.user = resp
    })
  }

}
