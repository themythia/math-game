import { ReactComponent as ButtonBorder } from '../../assets/answerButton.svg';
import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { StatsContext } from '../../contexts/StatsContext';
import { ThemeContext } from '../../contexts/ThemeContext';

const AnswerButton = ({ value, type }) => {
  const { questionId } = useParams();
  const navigate = useNavigate();

  const { stats, dispatch } = useContext(StatsContext);
  const { setTheme } = useContext(ThemeContext);
  const question = stats.questions[questionId - 1];
  const answer = question.multipliers[0] * question.multipliers[1];

  // useEffect(() => {
  //   let firstInterval;
  //   let secondInterval;
  //   const handleClick = () => {
  //     if (value === answer) {
  //       setTheme('green');
  //       dispatch({
  //         type: 'ADD_TRUE',
  //         index: questionId - 1,
  //         score: Math.ceil(Math.sqrt(answer)),
  //       });
  //       firstInterval = window.setTimeout(() => {
  //         setTheme('dark');
  //         console.log('interval running');
  //         if (questionId !== 10) {
  //           navigate(`/${Number(questionId) + 1}`);
  //           dispatch({ type: 'INCREASE_QUESTION' });
  //         } else navigate('/final');
  //       }, 3000);
  //     } else {
  //       setTheme('red');
  //       dispatch({ type: 'ADD_FALSE', index: questionId - 1 });
  //       secondInterval = window.setTimeout(() => {
  //         setTheme('dark');
  //         if (questionId !== 10) {
  //           navigate(`/${Number(questionId) + 1}`);
  //           dispatch({ type: 'INCREASE_QUESTION' });
  //         } else navigate('/final');
  //       }, 3000);
  //     }
  //   };
  //   if (clicked) handleClick();
  //   return () => {
  //     window.clearTimeout(firstInterval);
  //     window.clearTimeout(secondInterval);
  //   };
  // }, [clicked]);

  const handleClick = () => {
    if (value === answer) {
      setTheme('green');
      dispatch({
        type: 'ADD_TRUE',
        index: questionId - 1,
        score: Math.ceil(Math.sqrt(answer)),
      });
      window.setTimeout(() => {
        setTheme('dark');
        console.log('questionid', questionId);
        if (questionId !== 10) {
          navigate(`/${Number(questionId) + 1}`);
          dispatch({ type: 'INCREASE_QUESTION' });
        } else navigate('/final');
      }, 3000);
    } else {
      setTheme('red');
      dispatch({ type: 'ADD_FALSE', index: questionId - 1 });
      window.setTimeout(() => {
        setTheme('dark');
        if (questionId !== 10) {
          navigate(`/${Number(questionId) + 1}`);
          dispatch({ type: 'INCREASE_QUESTION' });
        } else navigate('/final');
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
    <button className={`h-[178px] relative ${position}`} onClick={handleClick}>
      <ButtonBorder />
      <p className='text-90 relative bottom-[75%]'>{value}</p>
    </button>
  );
};
export default AnswerButton;
