import { render } from '@testing-library/react';

import Characters from './Characters';

describe('Character', () => {
  beforeAll(() => {
    jest.resetAllMocks();
  });

  it('renders no data available', async () => {
    expect.hasAssertions();
    const { getByText } = render(<Characters />);

    expect(getByText(/No data/)).toBeInTheDocument();
  });
});
