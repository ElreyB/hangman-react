export const words = [
  'REACT',
  'JAVASCRIPT',
  'DEVELOPER',
  'HANGMAN',
  'COMPONENT',
];

export const chooseRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex].toLowerCase();
};
