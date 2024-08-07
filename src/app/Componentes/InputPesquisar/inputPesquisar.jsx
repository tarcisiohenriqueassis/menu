import Image from "next/image";

import style from "../InputPesquisar/input.module.css";

export default function BarraPesquisar(props){
    return(
        <div className={style.containerInput}>
            <Image className={style.imagemIcon} src={props.imagemIconPesquisar} alt={props.title} title={props.title}/>
            <input className={style.input} type="text" value={props.value} onChange={props.funcao} placeholder={props.placeholder} />
        </div>
    )
}
    