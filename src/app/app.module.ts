import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/CadastroUsuarioComponent.1';
import { EfetuarVendaComponent } from './efetuar-venda/efetuar-venda.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { IconComponent } from './icon/icon.component';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { RouterModule, Routes } from '@angular/router';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { RelatorioDeVendasComponent } from './relatorio-de-vendas/relatorio-de-vendas.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';

const routes: Routes = [
  { path: 'efetuar-venda', component: EfetuarVendaComponent },
  { path: 'cadastrar-produto', component: CadastrarProdutoComponent },
  { path: 'lista-usuario', component: ListaUsuarioComponent},
  { path: 'cadastro-usuario', component: CadastroUsuarioComponent},
  { path: 'editar-usuario', component: EditarUsuarioComponent},
  { path: 'lista-produtos', component: ListaProdutosComponent},
  { path: 'relatorio-vendas', component: RelatorioDeVendasComponent},
  { path: 'editar-produto', component: EditarProdutoComponent},

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
    EditarUsuarioComponent,
    ListaProdutosComponent,
    RelatorioDeVendasComponent,
    EditarProdutoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
        [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
