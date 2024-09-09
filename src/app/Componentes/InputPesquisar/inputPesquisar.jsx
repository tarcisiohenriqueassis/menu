import Image from "next/image";

import style from "../InputPesquisar/input.module.css";

import Produtos from "@/app/arrayProdutos/produtosCardapio.js";

export default function BarraPesquisar(props){

    const BuscarProduto = (textoDigitado) =>{
        return Produtos.filter((produto)=> produto.nome.toLocaleLowerCase().includes(textoDigitado.toLocaleLowerCase()) || 
         produto.descricao.toLocaleLowerCase().includes(textoDigitado.toLocaleLowerCase())
        )
    }

    return(

        <div className={style.containerInput}>
            <Image className={style.imagemIcon} src={props.imagemIconPesquisar} alt={props.title} title={props.title}/>
            <input className={style.input} 
             type="text"
             onChange={(event) => BuscarProduto(event.target.value)} 
             placeholder={props.placeholder} />
        </div>
    )
}
    