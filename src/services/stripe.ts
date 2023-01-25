import Stripe from 'stripe';
// import { version } from '../../package.json'
import packageInfo from '../../package.json';

export const stripe = new Stripe(

  process.env.STRIPE_API_KEY as string,
  {
    apiVersion: '2020-08-27',
    appInfo: {
      name: 'IgNews',
      version: packageInfo.version,
    }
  }
);