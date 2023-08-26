import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { EfetuarVendaComponent } from './efetuar-venda/efetuar-venda.component';
import { FormsModule } from '@angular/forms';
import { NomeComponentComponent } from './lista-usuario/nome-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CadastroUsuarioComponent,
    EfetuarVendaComponent,
    NomeComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
