import Router from "next/router";
import ReactGA from "react-ga4";
import { config } from "../constants/config";
import { googleAnalyticsTrackName } from "../constants/googleAnalytics";
import { link } from "../constants/link";

class GoogleAnalyticsService {
  constructor() {
    this.googleMeasurementID = config.googleAnalytics.MEASUREMENT_ID;
    this.downloadClickTrackName = googleAnalyticsTrackName.downloadClick;
    this.appStoreTrackName = googleAnalyticsTrackName.appStore;
    this.playStoreTrackName = googleAnalyticsTrackName.playStore;

    this.appStoreLink = link.appStoreLink;
    this.googleAppLink = link.googleAppLink;
    this.initialize();
  }

  initialize() {
    ReactGA.initialize(this.googleMeasurementID);
  }

  trackPageView() {
    ReactGA.send({
      hitType: "pageview",
      page: document.location.pathname,
      title: this.TRACK_PAGEVIEW_NAME,
    });
  }

  trackClickAppStore() {
    ReactGA.event(this.downloadClickTrackName, {
      event_category: this.appStoreTrackName
    });

    Router.push(this.appStoreLink);
  }

  trackClickPlayStore() {

    ReactGA.event(this.downloadClickTrackName, {
      event_category: this.playStoreTrackName
    });
    // ReactGA.event({
    //   action: this.downloadClickTrackName,
    //   category: this.playStore,
    // });
    Router.push(this.googleAppLink);
  }
}
const googleAnalyticsService = new GoogleAnalyticsService();

export default googleAnalyticsService;