import ReactGA from "react-ga4";

import { config } from "../constants/config";
import { googleAnalyticsTrackName } from "../constants/googleAnalytics";

class GoogleAnalyticsService {
  constructor() {
    this.googleMeasurementID = config.googleAnalytics.MEASUREMENT_ID;

    this.pageViewTrackname = googleAnalyticsTrackName.pageView;
    this.downloadClickTrackName = googleAnalyticsTrackName.downloadClick;
    this.appStoreTrackName = googleAnalyticsTrackName.appStore;
    this.playStoreTrackName = googleAnalyticsTrackName.playStore;

    this.initialize();
  }

  initialize() {
    ReactGA.initialize(this.googleMeasurementID);
  }

  trackPageView(url) {
    ReactGA.send({
      hitType: "pageview",
      page: url,
      title: this.pageViewTrackname,
    });
  }

  trackClickAppStore() {
    ReactGA.event(this.downloadClickTrackName, {
      event_category: this.appStoreTrackName,
    });
  }

  trackClickGooglePlay() {
    ReactGA.event(this.downloadClickTrackName, {
      event_category: this.playStoreTrackName,
    });
  }
}
const googleAnalyticsService = new GoogleAnalyticsService();

export default googleAnalyticsService;
