const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

// This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
module.exports = (phase) => {
  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environment variable
  const isDev =
    phase === PHASE_DEVELOPMENT_SERVER ||
    (phase === PHASE_PRODUCTION_BUILD && process.env.DEVELOPMENT == "1");

  // when `next build` or `npm run build` is used
  const isProd =
    phase === PHASE_PRODUCTION_BUILD && process.env.PRODUCTION == "1";
  // when `next build` or `npm run build` is used
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === "1";

  console.log(`isDev:${isDev} isProd:${isProd} isStaging:${isStaging}`);

  const env = {
    API_URL: (() => {
      if (isDev) return "https://api.integration.novacircle.com";
      if (isProd) return "https://api.novacircle.com";
      if (isStaging) return "https://api.staging.novacircle.com";

      return "API_URL:not (isDev,isProd && !isStaging,isProd && isStaging)";
    })(),
  };

  // next.config.js object
  return {
    env,
    reactStrictMode: true,
    output: "standalone",
  };
};
