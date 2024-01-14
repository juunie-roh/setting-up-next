import Link from 'next/link';

import { DefaultSection, Meta } from '@/layouts';
import { Main } from '@/templates';

const Portfolio = () => {
  return (
    <Main meta={<Meta title="Works" description="Portfolio of my works" />}>
      <DefaultSection>
        <h2 className="text-gray-900 dark:text-gray-100">Portfolios</h2>
        <Link
          className="text-gray-900 dark:text-gray-100"
          href="/100days/index.html"
        >
          100 Days: CSS Works
        </Link>
      </DefaultSection>
    </Main>
  );
};

export default Portfolio;
