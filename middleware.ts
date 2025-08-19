import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'es', 'it'],

  // Used when no locale matches
  defaultLocale: 'en',

  // Enable alternate links
  alternateLinks: false
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the locale for all requests
    // that don't have a locale
    '/(it|es)/:path*',

    // Enable redirects that add missing locales but exclude specific routes
    // that handle their own redirects
    '/((?!_next|_vercel|api|refer|chat|pricing|dashboard|auth|admin|legal|.*\\..*).*)'
  ]
};
