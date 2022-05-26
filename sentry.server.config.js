import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN;

function initSentry() {
  Sentry.init({
    dsn: SENTRY_DSN,
    // Note: if you want to override the automatic release value, do not set a
    // `release` value here - use the environment variable `SENTRY_RELEASE`, so
    // that it will also get attached to your source maps
    tracesSampleRate: 0.1,
  });
}

if (SENTRY_DSN) initSentry();
