import '@/styles/global.css';

import Link from 'next/link';

import Providers from '@/components/Providers';

export interface InfiniteScrollLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: InfiniteScrollLayoutProps) {
  return (
    <html lang="id">
      <body>
        <header className="sticky top-0 z-10 bg-stone-100 border-b border-stone-300">
          <nav className="max-w-2xl mx-auto px-6">
            <ul className="flex items-center justify-between py-4">
              <li>
                <Link href="/" className="text-2xl font-bold text-primary">
                  Home
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Providers>
            <section className="max-w-2xl mx-auto px-6">
              <article className="my-12">{children}</article>
            </section>
          </Providers>
        </main>
      </body>
    </html>
  );
}

