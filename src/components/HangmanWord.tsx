type HangmanWordProps = {
  reveal?: boolean;
  guessedLetters: string[];
  wordToGuess: string;
};

export default function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) {
  const mystyle: React.CSSProperties = {
    fontSize: "4rem",
    display: "flex",
    gap: "0.5rem", 
    fontFamily: "monospace",
    fontWeight: "bold",
    textTransform: "uppercase",
  };

  return (
    <div style={mystyle}>
      {wordToGuess.split("").map((letter, i) => {
        return (
          <span style={{ borderBottom: ".1em solid black" }} key={i}>
            <span
              style={{
                visibility:
                  guessedLetters.includes(letter) || reveal
                    ? "visible"
                    : "hidden",
                color:
                  !guessedLetters.includes(letter) && reveal ? "red" : "black",
              }}
            >
              {letter}
            </span>
          </span>
        );
      })}
    </div>
  );
}
