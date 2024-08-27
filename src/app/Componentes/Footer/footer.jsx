
import Image from "next/image";
import Link from "next/link";

import style from "../Footer/footer.module.css";

export default function Footer(props){
    return(
        <footer className={style.footer}>
        <div>
            <p>{props.textoFooter}</p>
        </div>
        <div>
                <Link href={props.link}>
                    <Image className={style.imagemBtn} src={props.imagemIconBtn} alt={props.title} title={props.title}/>
                </Link>
        </div>
        </footer>
    )
}