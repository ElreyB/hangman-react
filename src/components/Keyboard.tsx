import styled from 'styled-components';

const Container = styled.div`
  margin: 20px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
`;

const Button = styled.button`
  font-size: 18px;
  padding: 10px 15px;
  background-color: #7cbafc;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #c2e2ff;
  }
  &:disabled {
    background-color: #c2e2ff;
  }
`;

interface KeyboardProps {
  guessedLetters: string[];
  handleGuess: (letter: string) => void;
}

const Keyboard = ({ guessedLetters = [], handleGuess }: KeyboardProps) => {
  return (
    <Container>
      {Array.from(Array(26)).map((_, index) => {
        const letter = String.fromCharCode(65 + index); // 'A' to 'Z'
        return (
          <Button
            key={index}
            onClick={() => handleGuess(letter.toLowerCase())} // Convert to lowercase
            disabled={guessedLetters.includes(letter.toLowerCase())} // Compare in lowercase
            role="letter-button"
          >
            {letter}
          </Button>
        );
      })}
    </Container>
  );
};

export default Keyboard;
