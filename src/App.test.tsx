import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { App } from './App';
import { renderWithRouter } from './test/utils';

describe('App', () => {
  it('renders', async () => {
    renderWithRouter(<App />);
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });
  it('handles no match', async () => {
    renderWithRouter(<App />, { route: '/no-match' });
    expect(screen.getByText(/Nothing to see here!/i)).toBeInTheDocument();
  });
});
