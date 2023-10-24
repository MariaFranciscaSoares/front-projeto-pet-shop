import { Component, OnInit } from '@angular/core';
import { ItemVendaService } from './adapter/vendaService';
import { ItemVenda, VendaConsolidada } from './model/itemVenda.module';

@Component({
  selector: 'app-relatorio-de-vendas',
  templateUrl: './relatorio-de-vendas.component.html',
  styleUrls: ['./relatorio-de-vendas.component.css']
})
export class RelatorioDeVendasComponent implements OnInit {

  constructor(private itemVendaService: ItemVendaService) { }
  itensVenda: ItemVenda[] = [];
  vendasConsolidadas: VendaConsolidada[] = [];
  vendaConsolidada: VendaConsolidada = new VendaConsolidada();
  filtroIdVenda: string = '';

  ngOnInit(): void {
   this.buscarVenda();
  }

  buscarVenda(){
    this.itemVendaService.getItensVenda().subscribe(data => {
      // Processamento para consolidar os dados
      const consolidadoMap = new Map<number, any>();

      data.forEach(item => {
        const idVenda = item.idVendaFk.idVenda;

        if (consolidadoMap.has(idVenda)) {
          // Venda já existe, adicione as informações
          consolidadoMap.get(idVenda).quantidadeProdutos += item.quantidade;
          consolidadoMap.get(idVenda).valorTotal += item.quantidade * item.idProdutoFk.preco;
        } else {
          // Crie uma nova entrada para a venda
          consolidadoMap.set(idVenda, {
            idVenda,
            dataVenda: item.idVendaFk.dataVenda,
            quantidadeProdutos: item.quantidade,
            valorTotal: item.quantidade * item.idProdutoFk.preco
          });
        }
      });

      this.vendasConsolidadas = Array.from(consolidadoMap.values());
      console.log(this.vendasConsolidadas)
    });
  }

  aplicarFiltro() {
    if (this.filtroIdVenda) {
      this.vendasConsolidadas = this.vendasConsolidadas.filter(venda =>
        venda.idVenda.toString().includes(this.filtroIdVenda)
      );
    } else {
      this.buscarVenda();
    }
  }
}




