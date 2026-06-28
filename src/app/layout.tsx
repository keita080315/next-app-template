import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { Header } from "../components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Next App Template",
    template: "%s | Next App Template",
  },
  description: "Next.js App Routerで構築するWebサイトテンプレート",
};

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJp.className} min-h-screen text-[#1d1d1b]`}>
        <div className="flex min-h-screen flex-col">
          <Header />

          <main className="flex flex-1">{children}</main>

          <footer className="border-t border-black/10">
            <div className="mx-auto flex w-full items-center justify-center px-4 py-5 pb-7 text-center text-sm text-black/70">
              <p>© 2026 Next App Template</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
