import '@vkontakte/vkui/dist/vkui.css';
import '@/shared/styles/globals.css';

import type { Metadata } from 'next';
import Head from 'next/head';
import { ReactNode } from 'react';

import { ReactQueryProvider, VKProvider } from '@/shared/providers';

export const metadata: Metadata = {
  title: 'Вконтакте | Frontend-разработчик',
  description: 'VK mini app for enter to internship frontend development',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="ru" className="vkui">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <body>
        <ReactQueryProvider>
          <VKProvider mode="full">
            <main>{children}</main>
          </VKProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
