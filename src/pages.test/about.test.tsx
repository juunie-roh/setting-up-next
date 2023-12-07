import { render, screen } from '@testing-library/react';

import About from '@/pages/about';

describe('About page', () => {
  describe('Render method', () => {
    it('should have 3 paragraphs of `Lorem ipsum`', () => {
      render(<About />);
      const paragraph = screen.getAllByText(/Lorem ipsum/);
      expect(paragraph).toHaveLength(3);
    });
  });
});
