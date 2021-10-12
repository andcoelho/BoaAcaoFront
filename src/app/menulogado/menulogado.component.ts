import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menulogado',
  templateUrl: './menulogado.component.html',
  styleUrls: ['./menulogado.component.css']
})
export class MenulogadoComponent implements OnInit {

  nome = environment.nome
  foto = environment.foto

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  sair(){
    this.router.navigate(['/login'])
    environment.token = ''
    environment.nome = ''
    environment.email = ''
    environment.foto = ''
    environment.id = 0
  }

}
