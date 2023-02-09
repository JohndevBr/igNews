import { useSession, signIn } from 'next-auth/react'
import Error from 'next/error';
import { useRouter } from 'next/router';
import { useLanguage } from '../../hooks/useLanguage';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';

import styles from './styles.module.scss';

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  
  const { language } = useLanguage()
  
  const {data: session}: any = useSession()
  const router = useRouter()

  async function handleSubscribe(){

    if (!session) {
      signIn('github');
      return;
    }

    if(session?.activeSubscription) {
      router.push('/posts');
      return;
    } 

    // Chamada da rota de criação da checkout session

    try {
      const response = await api.post("/subscribe")

      const { sessionId } = response.data;

      const stripe = await getStripeJs()

      await stripe?.redirectToCheckout({ sessionId })

    } catch(err) {

      alert(err as Error)
    }

  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      {language === "en" ? "Subscribe now" : "Inscreva-se agora"}
    </button>
  )
}