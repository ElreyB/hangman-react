import { fireEvent, render, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import HangmanGame from './HangmanGame';
import * as chooseRandomWord from '../utils/chooseRandomWord';

vi.spyOn(chooseRandomWord, 'chooseRandomWord').mockReturnValue('test');

describe('HangmanGame', () => {
  it('should render component', () => {
    const { container } = render(<HangmanGame />);
    expect(container).toBeInTheDocument();
  });

  it('user wins the game when all letters are guessed', async () => {
    const { getByText, queryAllByRole } = render(<HangmanGame />);
    await waitFor(() => {
      expect(queryAllByRole('displayed-letter').length).toBe(4);
    });

    const lettersToSelect = ['t', 'e', 's'];

    lettersToSelect.forEach((letter) => {
      const letterButton = getByText(letter.toUpperCase());
      fireEvent.click(letterButton);
    });

    await waitFor(() => {
      expect(getByText('You won!')).toBeInTheDocument();
    });
  });

  it('user loses the game when too many wrong letters are guessed', () => {
    const { getByText } = render(<HangmanGame />);

    const lettersToSelect = ['f', 'q', 'a', 'k', 'l', 'p'];

    lettersToSelect.forEach((letter) => {
      const letterButton = getByText(letter.toUpperCase());
      fireEvent.click(letterButton);
    });

    expect(getByText('You lost! The word was: test')).toBeInTheDocument();
  });
});
