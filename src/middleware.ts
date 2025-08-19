import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'it', 'es'],

  // Used when no locale matches
  defaultLocale: 'en'
});

export const config = {
  // Match all pages that need internationalization
  matcher: [
    // Homepage
    '/',
    '/(it|es)',

    // Main pages
    '/how-it-works',
    '/(it|es)/how-it-works',
    '/pricing',
    '/(it|es)/pricing',
    '/refer',
    '/(it|es)/refer',

    // Legal pages
    '/legal/:path*',
    '/(it|es)/legal/:path*'
  ]
};
