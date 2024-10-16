import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import WordDisplay from './WordDisplay';

describe('WordDisplay', () => {
  const word: string = 'FLOWER';

  it('should render same number of dashes as the guessing word', () => {
    const { queryAllByRole } = render(
      <WordDisplay word={word} guessedLetters={[]} />
    );

    const displayLetters = queryAllByRole('displayed-letter');
    expect(displayLetters.length).toBe(word.length);
  });

  it('should render letters that are in guessedLetters array', () => {
    const { getByText } = render(
      <WordDisplay word={word} guessedLetters={['F', 'R']} />
    );

    const letterF = getByText('F');
    const letterR = getByText('R');
    expect(letterF).toBeInTheDocument();
    expect(letterR).toBeInTheDocument();
  });
});
