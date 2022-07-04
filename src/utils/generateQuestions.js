const generateQuestions = () => {
  // lets create 10 questions with random numbers
  let questionsArr = [];
  for (let i = 0; i < 10; i++) {
    const getRandom = () => Math.floor(Math.random() * 10) + 1;
    const shuffle = (array) => array.sort(() => Math.random() - 0.5);
    const first = getRandom();
    const second = getRandom();
    const answers = [
      first * second,
      (first - 1) * second,
      first * (second + 1),
    ];
    const question = {
      multipliers: [first, second],
      answers: shuffle(answers),
    };
    questionsArr.push(question);
  }
  return questionsArr;
};
export default generateQuestions;
