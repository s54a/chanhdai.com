import "@/styles/globals.css";

import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import type { WebSite, WithContext } from "schema-dts";

import { ConsentManager } from "@/components/consent-manager";
import { Providers } from "@/components/providers";
import { META_THEME_COLORS, SITE_INFO } from "@/config/site";
import { USER } from "@/features/portfolio/data/user";
import { fontMono, fontSans } from "@/lib/fonts";

function getWebSiteJsonLd(): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_INFO.name,
    url: SITE_INFO.url,
    alternateName: [USER.username],
  };
}

// Thanks @shadcn-ui, @tailwindcss
const darkModeScript = String.raw`
  try {
    if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
    }
  } catch (_) {}

  try {
    if (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {
      document.documentElement.classList.add('os-macos')
    }
  } catch (_) {}
`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.url),
  alternates: {
    canonical: "/",
  },
  title: {
    template: `%s – ${SITE_INFO.name}`,
    default: `${USER.displayName} – ${USER.jobTitle}`,
  },
  description: SITE_INFO.description,
  keywords: SITE_INFO.keywords,
  authors: [
    {
      name: "s54a",
      url: SITE_INFO.url,
    },
  ],
  creator: "ncdai",
  openGraph: {
    siteName: SITE_INFO.name,
    url: "/",
    type: "profile",
    firstName: USER.firstName,
    lastName: USER.lastName,
    username: USER.username,
    gender: USER.gender,
    images: [
      {
        url: SITE_INFO.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_INFO.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@s54a__",
    images: [SITE_INFO.ogImage],
  },
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%20100%20100%27%3E%3Crect%20width%3D%27100%27%20height%3D%27100%27%20rx%3D%2720%27%20fill%3D%27%23000000%27%2F%3E%3Ctext%20x%3D%2750%27%20y%3D%2750%27%20font-size%3D%2750%27%20fill%3D%27%23ffffff%27%20text-anchor%3D%27middle%27%20dy%3D%27.3em%27%20font-family%3D%27Poppins%2C%20sans-serif%27%20font-weight%3D%27bold%27%3ESG%3C%2Ftext%3E%3C%2Fsvg%3E",
        sizes: "any",
      },
      {
        url: "data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%20100%20100%27%3E%3Crect%20width%3D%27100%27%20height%3D%27100%27%20rx%3D%2720%27%20fill%3D%27%23000000%27%2F%3E%3Ctext%20x%3D%2750%27%20y%3D%2750%27%20font-size%3D%2750%27%20fill%3D%27%23ffffff%27%20text-anchor%3D%27middle%27%20dy%3D%27.3em%27%20font-family%3D%27Poppins%2C%20sans-serif%27%20font-weight%3D%27bold%27%3ESG%3C%2Ftext%3E%3C%2Fsvg%3E",
        type: "image/svg+xml",
      },
    ],
    apple: {
      url: "data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%20100%20100%27%3E%3Crect%20width%3D%27100%27%20height%3D%27100%27%20rx%3D%2720%27%20fill%3D%27%23000000%27%2F%3E%3Ctext%20x%3D%2750%27%20y%3D%2750%27%20font-size%3D%2750%27%20fill%3D%27%23ffffff%27%20text-anchor%3D%27middle%27%20dy%3D%27.3em%27%20font-family%3D%27Poppins%2C%20sans-serif%27%20font-weight%3D%27bold%27%3ESG%3C%2Ftext%3E%3C%2Fsvg%3E",
      type: "image/svg+xml",
      sizes: "180x180",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: META_THEME_COLORS.light,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{ __html: darkModeScript }}
        />
        {/*
          Thanks @tailwindcss. We inject the script via the `<Script/>` tag again,
          since we found the regular `<script>` tag to not execute when rendering a not-found page.
         */}
        <Script src={`data:text/javascript;base64,${btoa(darkModeScript)}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebSiteJsonLd()).replace(/</g, "\\u003c"),
          }}
        />
      </head>

      <body>
        <Providers>
          <NuqsAdapter>
            <ConsentManager>{children}</ConsentManager>
          </NuqsAdapter>
        </Providers>
      </body>
    </html>
  );
}
