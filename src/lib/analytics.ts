// lib/analytics.ts - Unified analytics event tracking

export const gtag = {
  config: (id: string) => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.gtag('config', id);
    }
  },
  event: (action: string, params: Record<string, any> = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, params);
    }
  },
};

export const trackPageView = (url: string, title: string) => {
  gtag.event('page_view', {
    page_path: url,
    page_title: title,
  });
};

export const trackEvent = (category: string, action: string, label?: string, value?: number) => {
  gtag.event(action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

export const trackConversion = (conversionId: string, value: number = 1) => {
  gtag.event('conversion', {
    conversion_id: conversionId,
    conversion_value: value,
  });
};

// Facebook Pixel tracking
export const fbq = {
  track: (event: string, params?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', event, params);
    }
  },
  trackCustom: (event: string, params?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('trackCustom', event, params);
    }
  },
};

// Microsoft Clarity tracking
export const clarity = {
  event: (eventName: string, eventData?: any) => {
    if (typeof window !== 'undefined' && (window as any).clarity) {
      (window as any).clarity('event', eventName, eventData);
    }
  },
};

declare global {
  interface Window {
    gtag: any;
    dataLayer: any[];
  }
}
