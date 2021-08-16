import React from 'react';
import { render, waitFor } from '@testing-library/react';

import App from './Characters';

describe('Character', () => {
  beforeAll(() => {
    jest.resetAllMocks();
  });

  it('should render the title of the app', async () => {
    const { getByText } = render(<App />);

    await waitFor(() => {
      expect(getByText(/The Breaking Bad/i)).toBeInTheDocument();
    });
  });
});
