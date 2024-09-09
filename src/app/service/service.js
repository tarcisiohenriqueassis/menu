import Produtos from "@/app/arrayProdutos/produtosCardapio.js";

const FiltrarPrato = (Categoria) =>{ 
     Produtos.filter((produto)=> produto.categoria === Categoria)
}



export default {FiltrarPrato};