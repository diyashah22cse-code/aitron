import type { Metadata } from "next";
import "./globals.css";
import { generateBaseMetadata, structuredData } from "@/lib/seo-config";
import { GoogleAnalyticsScript, GoogleTagManagerScript, FacebookPixelScript, MicrosoftClarityScript } from "@/components/Analytics";

const baseMetadata = generateBaseMetadata();

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Aitron | Powering Smart Infrastructure & Predictive Maintenance",
  description: "Aitron delivers cutting-edge smart infrastructure intelligence, enabling real-time monitoring, predictive maintenance, and operational cost optimization without heavy replacement.",
  keywords: ["Aitron", "Smart Infrastructure", "Predictive Maintenance", "Cost Optimization", "Real-Time Monitoring", "Digital Workflows", "Operational Dashboards", "Data Centers", "Energy Optimization"],
  authors: [{ name: "Aitron Systems" }],
  icons: {
    icon: "https://aitron-images.ams3.cdn.digitaloceanspaces.com/aitron-favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100..800&family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
        
        {/* Google Analytics 4 */}
        <GoogleAnalyticsScript />
        
        {/* Google Tag Manager */}
        <GoogleTagManagerScript />
        
        {/* Facebook Pixel */}
        <FacebookPixelScript />
        
        {/* Microsoft Clarity */}
        <MicrosoftClarityScript />
        
        {/* Structured Data - JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.organization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.website),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.product),
          }}
        />
      </head>
      <body className="antialiased selection:bg-aitron_secondary selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
