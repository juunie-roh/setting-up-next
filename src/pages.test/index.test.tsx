import { render, screen, within } from '@testing-library/react';

import Index from '@/pages/index';

describe('Index page', () => {
  describe('Render method', () => {
    it('should have two headings of `Juun`', () => {
      render(<Index />);
      const headings = screen.getAllByRole('heading');
      const headingsWithJuun: Array<HTMLElement> = [];
      headings.forEach((heading) => {
        const headWithJuun = within(heading).getByText('Juun');
        headingsWithJuun.push(headWithJuun);
      });
      expect(headingsWithJuun).toHaveLength(2);
    });

    it('should have 3 paragraphs of `Lorem ipsum`', () => {
      render(<Index />);
      const paragraph = screen.getAllByText(/Lorem ipsum/);
      expect(paragraph).toHaveLength(3);
    });
  });
});
