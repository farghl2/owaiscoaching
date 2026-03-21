import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { Inter, Oswald } from "next/font/google";


import "../globals.css";
import ReactQueryProvider from '../../lib/providers/ReactQueryProvider';
import { Directions, Languages } from '@/src/shared/constans/enums';


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className="dark scroll-smooth" dir={locale === Languages.ARABIC ? Directions.RTL : Directions.LTR}>
      <body className={`${inter.variable} ${oswald.variable} antialiased bg-background text-foreground`}>
        <NextIntlClientProvider messages={messages}>
          <ReactQueryProvider>
            <NuqsAdapter>
              {children}
            </NuqsAdapter>
          </ReactQueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
