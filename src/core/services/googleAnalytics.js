import Router from 'next/router';
import ReactGA from 'react-ga4';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const initReactGA = () => {
  ReactGA.initialize(GA_MEASUREMENT_ID);
}

export const trackClickAppStore = (e) => {
  ReactGA.event({
    category: 'Track clicks',
    action: 'Click',
    label: 'App Store Download Link',
  });

  Router.push('https://apps.apple.com/us/app/nova-circle/id6467128541')
};

export const trackClickPlayStore = (e) => {
  ReactGA.event({
    category: 'Track clicks',
    action: 'Click',
    label: 'Google Play Download Link',
  });
  Router.push('https://play.google.com/store/apps/details?id=se.abersoft.novacircle')
};