import styled from 'styled-components';

const Container = styled.div`
  margin: 20px;
  font-size: 24px;
  display: flex;
  justify-content: center;
`;

const Letter = styled.span`
  margin: 0 5px;
  font-size: 24px;
  display: inline-block;
  border-bottom: 2px solid #333;
  padding-bottom: 5px;
  transition: all 0.3s ease;
`;

interface WordDisplayProps {
  word: string;
  guessedLetters: string[];
}

const WordDisplay = ({ word, guessedLetters = [] }: WordDisplayProps) => (
  <Container>
    {word.split('').map((letter, index) => (
      <Letter key={index} role="displayed-letter">
        {guessedLetters.includes(letter) ? letter : '_'}
      </Letter>
    ))}
  </Container>
);
export default WordDisplay;
