import { Component, OnInit } from '@angular/core';
import { Usuario } from './model/lista-usuario.module';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  constructor() { }
  usuarios: Usuario[] = [];
  
  ngOnInit(): void {
  }

}
