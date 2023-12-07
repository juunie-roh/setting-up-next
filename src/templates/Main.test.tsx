import { render } from '@testing-library/react';

import { Main } from './Main';

describe('Main template', () => {
  describe('Render method', () => {
    it('what', () => {
      render(<Main meta={null}>{null}</Main>);
    });
  });
});
