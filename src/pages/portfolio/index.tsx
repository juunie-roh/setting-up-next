import { Meta } from '@/layouts/Meta';
import { DefaultSection, Main } from '@/templates';

const Portfolio = () => {
  return (
    <Main meta={<Meta title="Works" description="Portfolio of my works" />}>
      <DefaultSection>
        <h2 className="text-gray-900 dark:text-gray-100">Portfolios</h2>
      </DefaultSection>
    </Main>
  );
};

export default Portfolio;
