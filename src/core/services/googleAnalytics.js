import Router from "next/router";
import ReactGA from "react-ga4";

import { config } from "../constants/config";

const GA_MEASUREMENT_ID = config.googleAnalytics.MEASUREMENT_ID;

const TRACK_EVENT_NAME = "Track clicks";
const TRACK_PAGEVIEW_NAME = "Track Visit";

const APP_STORE_LINK = 'https://apps.apple.com/us/app/nova-circle/id6467128541';
const GOOGLE_APP_LINK =  'https://play.google.com/store/apps/details?id=se.abersoft.novacircle';

export const initReactGA = () => {
  ReactGA.initialize(GA_MEASUREMENT_ID);
};

export const trackPageView = () => {
    console.log('document.location.pathname',document.location.pathname);
  ReactGA.send({ hitType: "pageview", page: document.location.pathname, title: TRACK_PAGEVIEW_NAME });
};

export const trackClickAppStore = (e) => {
  ReactGA.event({
    category: TRACK_EVENT_NAME,
    action: "Click",
    label: "App Store Download Link",
  });

  Router.push(APP_STORE_LINK);
};

export const trackClickPlayStore = (e) => {
  ReactGA.event({
    category: TRACK_EVENT_NAME,
    action: "Click",
    label: "Google Play Download Link",
  });
  Router.push(GOOGLE_APP_LINK);
};
