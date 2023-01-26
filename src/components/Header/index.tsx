import { useLanguage } from '../../hooks/useLanguage';
import { ActiveLink } from '../ActiveLink';
import { SignInButton } from '../SignInButton/index';

import styles from './styles.module.scss';

export function Header(){

  const [ isEnglish, handleSelectEnglish, handleSelectPtBR ] = useLanguage()

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="Ig.news" />
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
        <div className={styles.flagsCountries}>
          <div 
            className={styles.flagContent}
            onClick={handleSelectPtBR as () => boolean}
          >
            <img src="/images/brazil.png" alt="Brazil Flag" />
            <span className={ !isEnglish ? styles.flagActive : ''}/>
          </div>
          <div 
            className={styles.flagContent}
            onClick={handleSelectEnglish as () => boolean}
          >
            <img src="/images/united-states.png" alt="Brazil Flag" />
            <span className={ isEnglish ? styles.flagActive : ''}/>
          </div>
        </div>
      </div>
    </header>
  )
}