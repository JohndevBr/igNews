import { AppProps } from 'next/app';
import { Header } from '../components/Header/index';
import { SessionProvider as NextAuthProvider } from "next-auth/react";
import { LanguageProvider } from '../hooks/useLanguage';



import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <LanguageProvider>
      <Header/>
      <Component {...pageProps} />
      </LanguageProvider>
    </NextAuthProvider>
  )
}

export default MyApp
