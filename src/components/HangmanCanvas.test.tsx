import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HangmanCanvas from './HangmanCanvas';

describe('HangmanCanvas', () => {
  it('should not render component when 0 mistakes is entered', () => {
    const { queryByTestId } = render(<HangmanCanvas mistakes={0} />);
    const container = queryByTestId('dots');
    expect(container).not.toBeInTheDocument();
  });

  it('should render component when mistakes are greater than 0', () => {
    const { queryByTestId } = render(<HangmanCanvas mistakes={4} />);
    const container = queryByTestId('dots');
    expect(container).toBeInTheDocument();
  });

  it('should render 3 dots with the roles of head body and left-arm', () => {
    const { getByRole } = render(<HangmanCanvas mistakes={3} />);
    const head = getByRole('head');
    const body = getByRole('body');
    const leftArm = getByRole('left-arm');
    expect(head).toBeInTheDocument();
    expect(body).toBeInTheDocument();
    expect(leftArm).toBeInTheDocument();
  });
});
