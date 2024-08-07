import Image from "next/image";

import style from "../CardItem/cardItem.module.css";



export default function CardItem(props){
    return(
        <article className={style.containerGlobalCard}>
            <div className={style.containerImagem}>
                <Image className={style.ImagemCard} src={props.imagemItem} alt={props.titulo} title={props.titulo} />
            </div>
            <div className={style.containerTextoCard}>
                <h3>{props.nomeItem}</h3>
                <span className={style.tipoPrato}>{props.tipoItem}</span>
                <p className={style.resumoPrato}>{props.resumoItem}</p>
            </div>
            <div>
            <p className={style.precoPrato}><strong>R$: {props.valorItem}</strong></p>
            </div>
        </article>
    )
}