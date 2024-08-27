"use client"

//useState
import { useState } from "react";

//style
import styles from "./page.module.css";

//Componentes 
import Banner from "./Componentes/Banner/banner";
import Btn from "./Componentes/Btn/Btn";
import BarraPesquisar from "./Componentes/InputPesquisar/inputPesquisar";
import CardItem from "./Componentes/CardItem/cardItem";

//icons Btn
import Entradas from "@/app/assets/entrada.png";
import Massas from "@/app/assets/massa.png";
import Carnes from "@/app/assets/carne.png";
import Bebidas from "@/app/assets/bebidas.png";
import Saladas from "@/app/assets/salada.png";
import Sobremesa from "@/app/assets/sobremesa.png";
import LupaPesquisar from "@/app/assets/lupa.png";
import SetaVoltarTopo from "@/app/assets/seta.webp";

//service
import FiltrarPrato from "@/app/service/service.js";

//array de produtos cardapio
import produtos from "./arrayProdutos/produtosCardapio";
import Footer from "./Componentes/Footer/footer";

export default function Home() { 

  const DadosCardapio = produtos;

  const[listaCardapio, setListaCardapio] = useState(DadosCardapio)

  return (
    <main className={styles.main}>
     <Banner/>
     <section className={styles.secaoBtn}>
      <Btn tipoPrato="Entradas" iconBtn={Entradas} funcao={()=> FiltrarPrato("Entradas")}/>
      <Btn tipoPrato="Massas" iconBtn={Massas}/>
      <Btn tipoPrato="Carnes" iconBtn={Carnes}/>
      <Btn tipoPrato="Bebidas" iconBtn={Bebidas}/>
      <Btn tipoPrato="Saladas" iconBtn={Saladas}/>
      <Btn tipoPrato="Sobremesas" iconBtn={Sobremesa}/>
     </section>
     <section className={styles.secaoBarraPesquisar}>
      <BarraPesquisar imagemIconPesquisar={LupaPesquisar} title="Pesquisar" placeholder="Pesquise um prato ou bebidas de nosso restaurante"/>
     </section>
     <section className={styles.secaoCardsPratos}>
     {listaCardapio.map( (produto) =>  ( 
        <CardItem 
        key={produto.id}
        imagemItem={produto.imagem}
        nomeItem={produto.nome} 
        tipoItem={produto.categoria}
        resumoItem={produto.descricao} 
        valorItem={produto.preco} />
      )) }
     </section>
     <Footer link="/" textoFooter="Desenvolvido por Tarcisio H" imagemIconBtn={SetaVoltarTopo} />
    </main>
  );
}
