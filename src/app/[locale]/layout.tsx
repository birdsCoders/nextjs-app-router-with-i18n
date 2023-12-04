import { NextIntlClientProvider, useMessages } from 'next-intl';
import { Mulish } from 'next/font/google';
import { PageParamsType } from '@/types';
import Header from '@/components/Header';
import Container from '@/components/Container';
import '@/theme/styles.scss';

const mulish = Mulish({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

const RootLayout = ({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: PageParamsType;
}) => {
  const messages = useMessages();

  return (
    <html
      lang={locale}
      className={mulish.className}
    >
      <body suppressHydrationWarning={true}>
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
        >
          <div>
            <Header />
            <main>
              <Container>{children}</Container>
            </main>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
