import { useLanguage } from '../../hooks/useLanguage';
import { ActiveLink } from '../ActiveLink';
import { SignInButton } from '../SignInButton/index';

import styles from './styles.module.scss';

export function Header(){

  const { language, selectLanguage } = useLanguage()

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img className={styles.logoImg} src="/images/logo.svg" alt="Ig.news" />
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>{ language === 'en' ? "Home" : "Início" }</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
        <div className={styles.flagsCountries}>
          <div 
            className={styles.flagContent}
            onClick={() => selectLanguage("pt")}
          >
            <img src="/images/brazil.png" alt="Brazil Flag" />
            <span className={ language === "pt" ? styles.flagActive : ''}/>
          </div>
          <div 
            className={styles.flagContent}
            onClick={() => selectLanguage("en")}
          >
            <img src="/images/united-states.png" alt="United States Flag" />
            <span className={ language === "en" ? styles.flagActive : ''}/>
          </div>
        </div>
      </div>
    </header>
  )
}