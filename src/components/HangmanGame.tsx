import { useState } from 'react';
import styled from 'styled-components';
import { chooseRandomWord } from '../utils/chooseRandomWord';
import HangmanCanvas from './HangmanCanvas';
import KeyBoard from './Keyboard';
import WordDisplay from './WordDisplay';

const Container = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: 10 10 10px rgba(0, 0, 0, 0.2);
`;

const H1 = styled.h1`
  color: #333;
`;

const ResultMessage = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0;
  color: #000000;
`;

const NewGameButton = styled.button`
  font-size: 18px;
  padding: 10px 15px;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0b7dda;
  }
`;

const HangmanGame = () => {
  const [word, setWord] = useState<string>(() => chooseRandomWord());
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [mistakes, setMistakes] = useState<number>(0);

  const handleGuess = (letter: string) => {
    letter = letter.toLowerCase();

    if (!word) {
      return;
    }

    setGuessedLetters((prevGuessedLetters) => {
      if (prevGuessedLetters.includes(letter)) {
        return prevGuessedLetters;
      }
      return [...prevGuessedLetters, letter];
    });

    if (!word.includes(letter)) {
      setMistakes((prevMistakes) => prevMistakes + 1);
    }
  };

  const isGameWon = () => {
    const uniqueLettersInWord = new Set(word.split(''));
    return Array.from(uniqueLettersInWord).every((letter) =>
      guessedLetters.includes(letter)
    );
  };

  const isGameLost = () => {
    return mistakes >= 6;
  };

  const resetGame = () => {
    setWord(chooseRandomWord());
    setGuessedLetters([]);
    setMistakes(0);
  };

  return (
    <Container>
      <H1>Hangman Game</H1>
      {/* ... other components ... */}
      <HangmanCanvas mistakes={mistakes} />
      <WordDisplay word={word} guessedLetters={guessedLetters} />
      <KeyBoard guessedLetters={guessedLetters} handleGuess={handleGuess} />

      {isGameWon() && <ResultMessage>You won!</ResultMessage>}
      {isGameLost() && (
        <ResultMessage>You lost! The word was: {word}</ResultMessage>
      )}
      <NewGameButton onClick={resetGame}>New Game</NewGameButton>
    </Container>
  );
};

export default HangmanGame;
