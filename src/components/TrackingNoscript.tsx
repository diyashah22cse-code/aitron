// components/TrackingNoscript.tsx
// Fallback tracking for users without JavaScript

export function GoogleTagManagerNoScript() {
  if (!process.env.NEXT_PUBLIC_GTM_ID) return null;

  return (
    <noscript
      dangerouslySetInnerHTML={{
        __html: `
          <iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>
        `,
      }}
    />
  );
}

export function FacebookPixelNoScript() {
  if (!process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID) return null;

  return (
    <noscript
      dangerouslySetInnerHTML={{
        __html: `
          <img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1"/>
        `,
      }}
    />
  );
}
