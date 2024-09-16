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
import Footer from "./Componentes/Footer/footer";

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

//array de produtos cardapio
import ProdutosCardapio from "@/app/arrayProdutos/produtosCardapio.js";

export default function Home() { 

  const[listaCardapio, setListaCardapio] = useState(ProdutosCardapio)
 
  //Filtra a categoria do prato 
  const FiltrarCategoriaPrato = (Categoria) =>{ 
   return setListaCardapio(ProdutosCardapio.filter((produto)=> produto.categoria === Categoria))
}

const BuscarProduto = (textoDigitado) =>{setListaCardapio(ProdutosCardapio.filter((produto)=> produto.nome.toLocaleLowerCase().includes(textoDigitado.toLocaleLowerCase()) || 
   produto.descricao.toLocaleLowerCase().includes(textoDigitado.toLocaleLowerCase()) || produto.categoria.toLocaleLowerCase().includes(textoDigitado.toLocaleLowerCase())))
}

  return (
    <main className={styles.main}>
     <Banner/>
     <section className={styles.secaoBtn}>
      <Btn tipoPrato="Entradas" iconBtn={Entradas} funcao={()=> FiltrarCategoriaPrato("Entradas")}/>
      <Btn tipoPrato="Massas" iconBtn={Massas} funcao={()=> FiltrarCategoriaPrato("Massas")}/>
      <Btn tipoPrato="Carnes" iconBtn={Carnes} funcao={()=> FiltrarCategoriaPrato("Carnes")}/>
      <Btn tipoPrato="Bebidas" iconBtn={Bebidas} funcao={()=> FiltrarCategoriaPrato("Bebidas")}/>
      <Btn tipoPrato="Saladas" iconBtn={Saladas} funcao={()=> FiltrarCategoriaPrato("Saladas")}/>
      <Btn tipoPrato="Sobremesas" iconBtn={Sobremesa} funcao={()=> FiltrarCategoriaPrato("Sobremesas")}/>
     </section>
     <section className={styles.secaoBarraPesquisar}>
      <BarraPesquisar
      imagemIconPesquisar={LupaPesquisar} 
      title="Pesquisar" 
      placeholder="Pesquise um prato ou bebidas de nosso restaurante" onchange={(event) =>BuscarProduto(event.target.value)}/>
     </section>
     <section className={styles.secaoCardsPratos}>
     {listaCardapio.map( (produto) =>( 
        <CardItem 
        key={produto.id}  
        imagemItem={produto.imagem}
        nomeItem={produto.nome} 
        tipoItem={produto.categoria}
        resumoItem={produto.descricao} 
        valorItem={produto.preco} />
      )) 
      }
     </section> 
    </main>
  );
}
