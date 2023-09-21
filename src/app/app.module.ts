import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { EfetuarVendaComponent } from './efetuar-venda/efetuar-venda.component';
import { FormsModule } from '@angular/forms';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { IconComponent } from './icon/icon.component';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { RouterModule, Routes } from '@angular/router';
import { MenuUsuarioComponent } from './menu-usuario/menu-usuario.component';
import { MenuEstoqueComponent } from './menu-estoque/menu-estoque.component';
import { MenuVendaComponent } from './menu-venda/menu-venda.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';

const routes: Routes = [
  { path: 'efetuar-venda', component: EfetuarVendaComponent },
  { path: 'cadastrar-produto', component: CadastrarProdutoComponent },
  { path: 'lista-usuario', component: ListaUsuarioComponent},
  { path: 'cadastrar-usuario', component: CadastroUsuarioComponent},
  { path: 'menu-usuario', component: MenuUsuarioComponent},
  { path: 'menu-estoque', component: MenuEstoqueComponent},
  { path: 'menu-venda', component: MenuVendaComponent},
  { path: 'editar-usuario', component: EditarUsuarioComponent},
  { path: 'lista-produtos', component: ListaProdutosComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CadastroUsuarioComponent,
    EfetuarVendaComponent,
    ListaUsuarioComponent,
    IconComponent,
    CadastrarProdutoComponent,
    MenuUsuarioComponent,
    MenuEstoqueComponent,
    MenuVendaComponent,
    EditarUsuarioComponent,
    ListaProdutosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
