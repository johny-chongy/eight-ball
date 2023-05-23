/** randomAns takes in an array of answer objects and returns a randomly
 *  selected answer object
 *
 *  input: answerList ([{msg, color}, ...])
 *  output: randAnswer {msg, color}
 */
function randomAns(answerList) {
  const randIdx = Math.floor(Math.random() * answerList.length);

  return answerList[randIdx];
}

export default randomAns;