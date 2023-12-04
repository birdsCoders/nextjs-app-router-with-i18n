import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { PageType } from '@/types';

export async function generateMetadata({ params: { locale } }: PageType) {
  const t = await getTranslations({ locale, namespace: 'METADATA' });
  return { title: t('TITLE') };
}

const HomePage = () => {
  const t = useTranslations();

  return <h1>{t('TITLE')}</h1>;
};

export default HomePage;
