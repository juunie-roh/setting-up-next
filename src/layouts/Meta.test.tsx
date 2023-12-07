import { render, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';

import { Meta } from './Meta';

jest.mock(
  'next/head',
  () =>
    function Head(props: { children: ReactNode }) {
      // eslint-disable-next-line testing-library/no-node-access
      return props.children;
    },
);

describe('Meta Component', () => {
  describe('Render Method', () => {
    it('should a page title', async () => {
      const title = 'Random title';

      render(<Meta title={title} description="Random Description" />);

      await waitFor(() => {
        expect(document.title).toEqual(title);
      });
    });
  });
});
