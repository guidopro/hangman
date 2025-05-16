import styles from "../Letters.module.css";

type KeyboardProps = {
  disabled?: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

export default function Letters({
  disabled = false,
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
}: KeyboardProps) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  const buttons = alphabet.map((letter) => {
    const isActive = activeLetters.includes(letter);
    const isInactive = inactiveLetters.includes(letter);

    return (
      <button
        onClick={() => addGuessedLetter(letter)}
        className={`${styles.btn} ${isActive ? styles.active : ""} ${
          isInactive ? styles.inactive : ""
        }`}
        key={letter}
        disabled={isActive || isInactive || disabled}
      >
        {letter}
      </button>
    );
  });

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
          gap: ".25rem",
        }}
      >
        {buttons}
      </div>
    </>
  );
}
