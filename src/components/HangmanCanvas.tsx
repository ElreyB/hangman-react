import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const Dot = styled.div`
  width: 20px;
  height: 20px;
  background-color: #333;
  margin: 0 5px;
  border-radius: 50%;
`;

interface HangmanCanvasProps {
  mistakes: number;
}

const HangmanCanvas = ({ mistakes }: HangmanCanvasProps) => {
  const parts = [
    'head',
    'body',
    'left-arm',
    'right-arm',
    'left-leg',
    'right-leg',
  ];

  return (
    <>
      {mistakes > 0 && (
        <Container data-testid="dots">
          {parts.slice(0, mistakes).map((part, index) => (
            <Dot key={index} role={part} />
          ))}
        </Container>
      )}
    </>
  );
};

export default HangmanCanvas;
