import Layout from '../components/MyLayout';
import { useTranslation } from '@root/i18n';

const Index = () => {
  const { t } = useTranslation();
  const marks = Object.values(t('journey.step.area.marks', { returnObjects: true, defaultValue: {} })).map(mark => ({
    ...mark,
    value: Number.parseInt(mark.value, 10),
  }));
  return (<>
    <h1>{t('home-h1')}</h1>
    <h2>{marks}</h2>
  </>
  );
}


Index.getInitialProps = async ctx => {
  return {
    namespacesRequired: ['common']
  };
};

export default Index;
