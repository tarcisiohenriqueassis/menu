import style from "../Banner/banner.module.css";

import imagemBanner from "@/../public/Assets/banner.png"

import Image from "next/image";

export default function Banner(props){
    return(
        <header className={style.containerBanner}>
            <article className={style.containerImagem}>
                <Image className={style.imagem} src={imagemBanner} width={700}/>
            </article> 
            <div className={style.textoBanner}>
                 <h1 className={style.titulo}>Restaurante</h1>
                <p className={style.paragrafo}>De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados</p>
            </div>
        </header>
    )
}