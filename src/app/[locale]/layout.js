import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import LayNav from "../../../components/LayNav";
import { NextIntlClientProvider, useMessages } from "next-intl";
import Script from "next/script";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rashaktik",
  description: "لدينا كل ما تحتاجه لياقتك",
};

export default function RootLayout({ children, params }) {
  const messages = useMessages();

  return (
    <html lang={params.locale} dir={params.locale==="ar"?"rtl":"ltr"}>
      <body className={inter.className}>
      <NextIntlClientProvider locale={params.locale} messages={messages}>
      <LayNav/>
      <main>
      {children}
      </main>
       
      </NextIntlClientProvider>
      <Script src="/bootstrap.js" />
        </body>
    </html>
  );
}
