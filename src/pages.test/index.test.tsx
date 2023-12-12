import { render, screen } from '@testing-library/react';

import Index from '@/pages/index';

describe('Index page', () => {
  describe('Render method', () => {
    it('should have 3 paragraphs of `Lorem ipsum`', () => {
      render(<Index />);
      const paragraph = screen.getAllByText(/Lorem ipsum/);
      expect(paragraph).toHaveLength(3);
    });
  });
});
