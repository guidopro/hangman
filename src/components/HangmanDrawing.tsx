import "../HangmanDrawing.css";

const HEAD = <div id="head"></div>;
const BODY = <div id="body"></div>;
const LEFT_ARM = <div id="left-arm"></div>;
const RIGHT_ARM = <div id="right-arm"></div>;
const LEFT_LEG = <div id="left-leg"></div>;
const RIGHT_LEG = <div id="right-leg"></div>;

const BODY_PARTS = [HEAD, BODY, LEFT_ARM, RIGHT_ARM, LEFT_LEG, RIGHT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export default function HangmanDrawing({
  numberOfGuesses,
}: HangmanDrawingProps) {
  return (
    <div id="container">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div id="four"></div>
      <div id="three"></div>
      <div id="two"></div>
      <div id="one"></div>
    </div>
  );
}
