import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

// Add custom event tracking
import { useEffect } from 'react';
import { useRouter } from 'next/router';
// Add this import
import CookieConsent from '../components/CookieConsent';
import SEO from '../components/SEO';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Track page views and user navigation
  useEffect(() => {
    const handleRouteChange = (url) => {
      // Custom event for Vercel Analytics
      if (typeof window !== 'undefined' && window.va) {
        window.va('event', {
          name: 'page_view',
          data: { path: url },
        });
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <SEO />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;