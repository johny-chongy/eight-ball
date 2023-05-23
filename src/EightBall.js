import { useState } from "react";
import randomAns from "./randomAns";

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
function Eightball({answers=EXAMPLE_ANSWERS}) {
  const [ans, setAns] = useState({msg: "Think of a Question", color: "black"});

  const divStyle = {
    backgroundColor: ans.color,
    borderRadius: "50%",
    marginLeft: "auto",
    marginRight:"auto",
    color:"white",
    width:"200px",
    height:"200px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  };

  function handleClick(evt) {
    setAns(randomAns(answers));
  }

  return (
    <div className="eightball" onClick={handleClick} style={divStyle}>
      <p>{ans.msg}</p>
    </div>

  )
}

export default Eightball;