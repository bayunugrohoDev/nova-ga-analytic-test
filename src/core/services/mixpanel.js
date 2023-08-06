import mixpanel from 'mixpanel-browser';
import { config } from '../constants/config';

let env_check = process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging';

env_check && mixpanel.init(config.mixpanel.project_token);

function identify(id) {
  if (env_check) mixpanel.identify(id);
}

function alias(id) {
    if (env_check) mixpanel.alias(id);
}

function track(name, props = {}) {
    if (env_check) mixpanel.track(name, props);
}

function setPeople(props) {
    if (env_check) mixpanel.people.set(props);
}

export const Mixpanel = {
    identify,
    alias,
    track,
    setPeople
};