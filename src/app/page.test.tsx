import { render, screen, within } from '@testing-library/react';

import LandingPage from './page';

describe('Landing Page', () => {
  describe('Render method', () => {
    it('should have two headings of `Juun`', () => {
      render(<LandingPage />);
      const headings = screen.getAllByRole('heading');
      const headingsWithJuun: Array<HTMLElement> = [];
      headings.forEach((heading: any) => {
        const headWithJuun = within(heading).getByText('Juun');
        headingsWithJuun.push(headWithJuun);
      });
      expect(headingsWithJuun).toHaveLength(1);
    });
  });
});
