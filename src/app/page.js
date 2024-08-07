//array de produtos cardapio
import produtos from "./arrayProdutos/produtosCardapio";
import styles from "./page.module.css";

//Componentes 
import Banner from "./Componentes/Banner/banner";
import Btn from "./Componentes/Btn/Btn";
import BarraPesquisar from "./Componentes/InputPesquisar/inputPesquisar";
import CardItem from "./Componentes/CardItem/cardItem";

//icons Btn
import Entradas from "../../public/assets/entrada.png";
import Massas from "../../public/assets/massa.png";
import Carnes from "../../public/assets/carne.png";
import Bebidas from "../../public/assets/bebidas.png";
import Saladas from "../../public/assets/salada.png";
import Sobremesa from "../../public/assets/sobremesa.png";
import LupaPesquisar from "../../public/assets/lupa.png"

export default function Home() {

  const DadosCardapio = produtos;

  return (
    <main className={styles.main}>
     <Banner/>
     <section className={styles.secaoBtn}>
      <Btn tipoPrato="Entradas" iconBtn={Entradas}/>
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
     { DadosCardapio.map( (produto) =>  ( 
        <CardItem 
        key={produto.id}
        imagemItem={produto.imagem}
        nomeItem={produto.nome} 
        tipoItem={produto.categoria}
        resumoItem={produto.descricao} 
        valorItem={produto.preco} />
      )) }
     </section>
    </main>
  );
}
