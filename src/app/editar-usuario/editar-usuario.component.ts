import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /*public Genero() {
    var checkRadio = document.querySelector(
        'input[name="flexRadioDefault"]:checked');

    if(checkRadio) {
        
    }
    else {
        
    }
  }

  public getGenero() {
    var Homem = document.getElementById('Homem');
    var Mulher = document.getElementById('Mulher');
    var usuario;
  
    if(document.getElementById('Homem')?.ariaChecked) {
        usuario = '/assets/usuarioHomem.png';
    }
    else if(document.getElementById('Mulher')) {
        usuario = '/assets/usuarioHomem.png';
    }
  }*/

}
 



/*function getGenero() {
  var sexo = document.getElementsByName('flexRadioDefault');
  var genero = '';
  var usuario;

  if(sexo[0].checked) {
      genero = 'Homem';
      usuario = '/assets/usuarioHomem.png';
  }
  else if(sexo[1].checked) {
      genero = 'Mulher';
      usuario = '/assets/usuarioHomem.png';
  }
}*/

