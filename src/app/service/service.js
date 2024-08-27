import Dados from "@/app/arrayProdutos/produtosCardapio.js";

const FiltrarPrato = (Categoria) =>{
    return Dados.filter((produto)=> produto.categoria === Categoria)
}

const BuscarProduto = (textoDigitado) =>{
    return Dados.filter((produto)=> produto.nome.toLocaleLowerCase().includes(textoDigitado.toLocaleLowerCase()) || 
     produto.descricao.toLocaleLowerCase().includes(textoDigitado.toLocaleLowerCase())
    )
}


export default FiltrarPrato;