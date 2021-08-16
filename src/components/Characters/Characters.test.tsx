import { render } from '@testing-library/react';

import Characters from './Characters';
import CharacterCard from './CharacterCard';

import mockData from './mock_data.json';
import { Character } from './types';

describe('Character', () => {
  beforeAll(() => {
    jest.resetAllMocks();
  });

  it('renders no data available', () => {
    expect.hasAssertions();
    const { getByText } = render(<Characters />);

    expect(getByText(/No data/)).toBeInTheDocument();
  });

  it('renders all breaking bad characters', () => {
    expect.assertions(3);
    const { queryAllByTestId } = render(<CharacterCard data={mockData as Character[]} />);

    const allCharacters = queryAllByTestId('character-element');

    expect(allCharacters).toBeTruthy();
    expect(allCharacters).toHaveLength(4);
    expect(allCharacters[0]).toHaveTextContent(/Walter White/);
  });
});
