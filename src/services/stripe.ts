import Stripe from "stripe";
// import { version } from '../../package.json'
import packageInfo from '../../package.json';

const stripe = new Stripe(process.env.STRIPE_API_KEY as string, {
  // @ts-ignore stripe-version-2022-08-01
  apiVersion: "2020-08-27",
  appInfo: {
    name: "Ignews",
    version: packageInfo.version,
  },
});

export default stripe;