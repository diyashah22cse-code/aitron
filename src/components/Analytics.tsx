// components/Analytics.tsx - All tracking script initialization
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackPageView } from '@/lib/analytics';

export function AnalyticsScripts() {
  const pathname = usePathname();

  useEffect(() => {
    // Google Analytics 4
    if (process.env.NEXT_PUBLIC_GA_ID) {
      window.dataLayer = window.dataLayer || [];
      function gtag(..._args: any[]) {
        window.dataLayer.push(arguments);
      }
      (window as any).gtag = gtag;
      gtag('js', new Date());
      gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
        page_path: pathname,
      });
    }

    // Facebook Pixel
    if (process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID) {
      (window as any).fbq = function (...args: any[]) {
        if ((window as any).fbq.callMethod) {
          (window as any).fbq.callMethod.apply((window as any).fbq, args);
        } else {
          (window as any).fbq.queue.push(args);
        }
      };
      (window as any).fbq.push = (window as any).fbq;
      (window as any).fbq.loaded = true;
      (window as any).fbq.version = '2.0';
      (window as any).fbq.queue = [];
      (window as any).fbq('init', process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID);
      (window as any).fbq('track', 'PageView');
    }

    // Microsoft Clarity
    if (process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID) {
      (window as any).clarity('event', 'page_view', { pathname });
    }

    // Track page view
    trackPageView(pathname, document.title);
  }, [pathname]);

  return null;
}

export function GoogleAnalyticsScript() {
  if (!process.env.NEXT_PUBLIC_GA_ID) return null;

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

export function GoogleTagManagerScript() {
  if (!process.env.NEXT_PUBLIC_GTM_ID) return null;

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtm.js?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              'gtm.start': new Date().getTime(),
              event: 'gtm.js'
            });
          `,
        }}
      />
    </>
  );
}

export function FacebookPixelScript() {
  if (!process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID) return null;

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
          fbq('track', 'PageView');
        `,
      }}
    />
  );
}

export function MicrosoftClarityScript() {
  if (!process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID) return null;

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
        `,
      }}
    />
  );
}
