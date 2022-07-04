import { ReactComponent as ButtonBorder } from '../../assets/answerButton.svg';
import { ReactComponent as BlackButtonBorder } from '../../assets/answerButtonBlack.svg';
import { ReactComponent as GreenButtonBorder } from '../../assets/answerButtonGreen.svg';
import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { StatsContext } from '../../contexts/StatsContext';
import { ThemeContext } from '../../contexts/ThemeContext';

const AnswerButton = ({ value, type, clicked, setClicked }) => {
  const { questionId } = useParams();
  const navigate = useNavigate();
  const { stats, dispatch } = useContext(StatsContext);
  const { setTheme } = useContext(ThemeContext);
  const question = stats.questions[questionId - 1];
  const answer = question.multipliers[0] * question.multipliers[1];
  const [thisButton, setThisButton] = useState(false);

  // reset clicked button on page change
  useEffect(() => {
    setThisButton(false);
  }, [questionId]);

  const handleClick = () => {
    setClicked(true);
    setThisButton(true);
    // if right answer selected
    if (value === answer) {
      setTheme('green');
      dispatch({
        type: 'ADD_TRUE',
        index: questionId - 1,
        score: Math.ceil(Math.sqrt(answer)),
      });
      window.setTimeout(() => {
        setTheme('dark');
        if (questionId < 10) {
          // if there are still questions to answer
          navigate(`/${Number(questionId) + 1}`);
          dispatch({ type: 'INCREASE_QUESTION' });
        } else {
          // if on final question
          dispatch({
            type: 'UPDATE_TOTAL',
            score: stats.current.score + Math.ceil(Math.sqrt(answer)),
            questions: stats.current.questions,
            answers: stats.current.correctAnswers,
          });

          navigate('/final');
        }
      }, 3000);
    } else {
      // if answer is wrong
      setTheme('red');
      dispatch({ type: 'ADD_FALSE', index: questionId - 1 });
      window.setTimeout(() => {
        setTheme('dark');
        if (questionId < 10) {
          // if there are still questions to answer
          navigate(`/${Number(questionId) + 1}`);
          dispatch({ type: 'INCREASE_QUESTION' });
        } else {
          // if on final question
          dispatch({
            type: 'UPDATE_TOTAL',
            score: stats.current.score,
            questions: stats.current.questions,
            answers: stats.current.correctAnswers,
          });

          navigate('/final');
        }
      }, 3000);
    }
  };

  const position =
    type === '1'
      ? 'right-[25%]'
      : type === '2'
      ? 'left-[25%]'
      : type === '3'
      ? 'right-[10%]'
      : null;
  return (
    <button
      disabled={clicked}
      className={`h-[178px] relative ${position}`}
      onClick={handleClick}
    >
      {thisButton && <BlackButtonBorder />}
      {!clicked || (clicked && !thisButton && value !== answer) ? (
        <ButtonBorder />
      ) : null}
      {clicked && !thisButton && value === answer && <GreenButtonBorder />}
      <p className='text-90 relative bottom-[75%]'>{value}</p>
    </button>
  );
};
export default AnswerButton;
