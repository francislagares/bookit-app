import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Index', () => {
  it('renders without crashing', () => {
    render(<Home />);

    const header = screen.getByRole('heading', { name: 'The Home Page' });
    expect(header).toBeInTheDocument();
  });
});
