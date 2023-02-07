import { GetStaticProps } from 'next';
import { stripe } from '../services/stripe';
import { useContext } from 'react'
//Serve para colocar o título dinâmico, por página
import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton/index';
import styles from './home.module.scss';
import { useLanguage } from '../hooks/useLanguage';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

//Obrigatóriamente precisa ter o export default
export default function Home({product}: HomeProps) {
  const { language } = useLanguage()

  return (
    <>
     {/* A tag Head pode ser colocada em qualquer lugar da aplicação */}
      <Head>
        <title>{language === 'en' ? 'Home' : "Início"}  IgNews </title>
      </Head>
      
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, {language === 'en' ? 'Welcome' : "Bem vindo"} </span>
          {language === 'en' 
            ?
            <h1>News about the <span>React</span> world.</h1>
            :
            <h1>Novidades sobre o mundo <span>React</span>.</h1>
          }

          { language === "en"
            ?
              (
                <p>
                  Get acess to all the publications <br />
                  <span>for {product.amount} month</span>
                </p>
              )
            :
                (
                  <p>
                    Tenha acesso a todas as postagens <br />
                    <span>pelo preço de {product.amount} por mês</span>
                  </p>
                )
          }
          <SubscribeButton priceId={product.priceId}/>

        </section>

        <img src="/images/avatar.svg" alt="Girl Coding" />
      </main>
    </>
  )
}

//Chamadas SSR(Server-side Rendering) irão ocorrer aqui 
//Todo console.log que eu colocar dentro dessa função, irá ocorrer no servidor node do NEXT
// export const getServerSideProps: GetServerSideProps = async () => { }

// Essa nova função é responsável pelo Static Site Generator
export const getStaticProps: GetStaticProps = async () => {

  const price = await stripe.prices.retrieve('price_1L8a68A0z8K9oLnvCUyB3BJa')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      // Problema do price.unit_amount, resolvido colocando o ! no final, porém tem no fórum da aula, com outra forma de fazer
    }).format(price.unit_amount! / 100),
  }

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}
