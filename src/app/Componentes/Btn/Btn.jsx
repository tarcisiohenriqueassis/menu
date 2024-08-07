import style from "../Btn/Btn.module.css";

import Image from "next/image";

export default function BotoesPesquisa(props){
    return(  
            <ul>
            <li className={style.li}>
                <button onClick={props.funcao} className={style.Btn}>
                    <Image className={style.iconBtn} src={props.iconBtn}/>
                    {props.tipoPrato}
                </button></li>
            </ul>
    )
}