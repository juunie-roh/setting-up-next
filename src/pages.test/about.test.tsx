import { render, screen } from '@testing-library/react';

import About from '@/pages/about';

describe('About page', () => {
  describe('Render method', () => {
    it('should have 4 link boxes', () => {
      render(<About />);
      const boxes = screen.getAllByText('->');
      expect(boxes).toHaveLength(4);
    });
  });
});
