import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import styles from './menu.module.scss';

const Menu: FC = () => {
  const t = useTranslations();

  return (
    <ul className={styles.menu}>
      <li>
        <Link href="/">{t('MENU.HOME')}</Link>
      </li>
      <li>
        <Link href="/about">{t('MENU.ABOUT')}</Link>
      </li>
    </ul>
  );
};

export default Menu;
