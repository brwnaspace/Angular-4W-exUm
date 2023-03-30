import { Component } from '@angular/core';
import { Produto } from '../../models/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  
  title:string = "CONHEÇA NOSSOS PRODUTOS"

  produtos: Array<Produto> = [
    {
      nome: "Edição Comemorativa 22/23",
      preco: 149.99,
      img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/631/923/products/cbea364e1-9c19eb116031c85ec816600720671710-640-0.webp",
      disponivel: true
    },
    {
      nome: "Camisa 21/22",
      preco: 129.99,
      img: "https://cdn.shopify.com/s/files/1/0612/3860/8117/files/685fd222_480x480.jpg?v=1661434147",
      disponivel: true
    },
    {
      nome: "Camisa 12/13",
      preco: 129.99,
      img: "http://d2r9epyceweg5n.cloudfront.net/stores/002/322/390/products/camisa-fluminense-2012-011-c5106811ad33602a4d16644901920738-640-0.jpeg",
      disponivel: true
    },
    {
      nome: "Camisa Retrô 12/13",
      preco: 199.90,
      img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/002/205/667/products/fe0a6a761-fd3e2dabef1557a5fd16590382644782-640-0.jpeg",
      disponivel: false
    },
    {
      nome: "Camisa 22/23 Feminina",
      preco: 150,
      img: "https://images.tcdn.com.br/img/img_prod/1047672/camisa_fluminense_i_22_23_s_no_torcedor_umbro_feminina_909_1_ddad1b33a990a699b983fcce192647f2.jpg",
      disponivel: true
    },
    {
      nome: "Camisa Treino 21/22",
      preco: 110.90,
      img: "http://d2r9epyceweg5n.cloudfront.net/stores/002/511/753/products/86d37baf1-a6108ced189bcf812c16665477246426-640-0.jpg",
      disponivel: false
    },
    {
      nome: "Camisa 3Third",
      preco: 200,
      img: "http://d2r9epyceweg5n.cloudfront.net/stores/002/322/390/products/camisa-fluminense-3-011-2c4fc681613c2675d516704627551564-640-0.jpeg",
      disponivel: true
    },
    {
      nome: "Camisa Home 22/23",
      preco: 149.90,
      img: "http://d2r9epyceweg5n.cloudfront.net/stores/002/372/350/products/951-a3a9961c5db998313016619920418927-640-0.png",
      disponivel: true
    }
  ]

  constructor() { }

  ngOnInit(): void {

  }
}
