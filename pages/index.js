import Layout from '../components/MyLayout';
import { useTranslation } from '@root/i18n';

const Index = () => {
  const { t } = useTranslation();
  return (
  <h1>{t('home-h1')}</h1>
  );
}


Index.getInitialProps = async ctx => {
  return {
    namespacesRequired: ['common']
  };
};

export default Index;
