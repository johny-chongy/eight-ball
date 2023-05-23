import { useState } from "react";
import randomAns from "./randomAns";
import "./EightBall.css"

const DEFAULT_ANSWER = { msg: "Think of a Question", color: "black" };
const EXAMPLE_ANSWERS = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
];


/** Eightball renders component for magic eight ball
 *
 *  Props:
 * - answers (array of objects [{msg, color}, ...])
 *
 *  State:
 * - ans (object {msg, color})
 *
 *  App -> Eightball
 */
function Eightball({ answers = EXAMPLE_ANSWERS }) {
  const [answer, setAnswer] = useState(DEFAULT_ANSWER); //TODO: ans -> answer

  const divStyle = { //TODO: move non-dynamic to css
    backgroundColor: answer.color,

  };

  // handle click
  function handleClick(evt) {
    setAnswer(randomAns(answers));
  }

  //handle reset
  function reset(evt) {
    setAnswer(DEFAULT_ANSWER);
  }

  return (
    <div>
      <div className="Eightball" onClick={handleClick} style={divStyle}>
        <p>{answer.msg}</p>
      </div>
      <button onClick={reset}>
        Reset
      </button>
    </div>


  );
}

export default Eightball;