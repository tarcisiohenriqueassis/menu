import Image from "next/image";

import style from "../InputPesquisar/input.module.css";

import Produtos from "@/app/arrayProdutos/produtosCardapio.js";

export default function BarraPesquisar(props){
    


    return(

        <div className={style.containerInput}>
            <Image className={style.imagemIcon} src={props.imagemIconPesquisar} alt={props.title} title={props.title}/>
            <input className={style.input} 
            value={props.value}
             type="text"
             onChange={props.onchange} 
             placeholder={props.placeholder} />
        </div>
    )
}
    