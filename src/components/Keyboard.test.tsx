import { fireEvent, render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Keyboard from './Keyboard';

const emptyGuessedLetters: string[] = [];
const guessedLetters: string[] = ['c'];
const onClickMock = vi.fn();

describe('Keyboard', () => {
  it('should render component', () => {
    const { container } = render(
      <Keyboard
        guessedLetters={emptyGuessedLetters}
        handleGuess={onClickMock}
      />
    );
    expect(container).toBeInTheDocument();
  });

  it('should display button for each alphabet character', () => {
    const letters = Array.from(Array(26)).map((_, index) =>
      String.fromCharCode(65 + index)
    );

    const { queryAllByRole } = render(
      <Keyboard
        guessedLetters={emptyGuessedLetters}
        handleGuess={onClickMock}
      />
    );

    const buttons = queryAllByRole('letter-button');
    letters.forEach((letter) => {
      const charButton = buttons.find((button) =>
        button.textContent?.includes(letter.toUpperCase())
      );
      expect(charButton).toBeInTheDocument();
    });
  });

  it('should call on click fn when clicked', async () => {
    const { getByText } = render(
      <Keyboard
        guessedLetters={emptyGuessedLetters}
        handleGuess={onClickMock}
      />
    );

    const hButton = getByText(/H/);

    fireEvent.click(hButton);
    expect(onClickMock).toBeCalled();
  });

  it('should disable button when letter is in guessedLetters array', () => {
    const { getByText } = render(
      <Keyboard guessedLetters={guessedLetters} handleGuess={onClickMock} />
    );
    const hButton = getByText(/C/);

    expect(hButton).toBeDisabled();
  });
});
