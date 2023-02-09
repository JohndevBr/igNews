import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useLanguage } from '../../hooks/useLanguage';

import styles from './styles.module.scss'

export function SignInButton(){
  const { language } = useLanguage()
  const {data: session}: any = useSession()

  return session ? (
    <button 
      type="button"
      className={styles.signInButton}
      onClick={ () => signOut() }
    >
      <FaGithub color="#04d361"/>
      {session?.session?.user.name}
      <FiX color="#737380" className={styles.closeIcon}/>
    </button>
  ) : (
    <button 
      type="button"
      className={styles.signInButton}
      onClick={ () => signIn('github') }
    >
      <FaGithub color="#eba417"/>
      {language === "en" ? "Sign in with GitHub" : "Entrar com o GitHub"}
    </button>
  )
    
}