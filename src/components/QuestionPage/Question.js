import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReactComponent as Stickman } from '../../assets/stickman.svg';
import { StatsContext } from '../../contexts/StatsContext';
import useWindowSize from '../../hooks/useWindowSize';
import Stats from '../StartPage/Stats';
import AnswerButton from './AnswerButton';

const Question = () => {
  const { questionId } = useParams();
  const { stats } = useContext(StatsContext);
  const { width } = useWindowSize();
  const question = stats.questions[questionId - 1];
  const [clicked, setClicked] = useState(false);

  useEffect(() => setClicked(false), [questionId]);

  return (
    <div className='flex flex-row'>
      <div className='max-h-screen overflow-hidden'>
        <Stickman width={width / 2 || 0} className='max-h-full' />
        <p className='relative text-90 bottom-[65%] left-[5%] sm:text-128 sm:bottom-[70%] sm:left-[5%] md:text-128 md:bottom-[73%] md:left-[5%] lg:text-128 lg:bottom-[75%] lg:left-[8%]'>{`${question.multipliers[0]} x ${question.multipliers[1]}`}</p>
      </div>
      <div className='flex flex-col w-1/2 p-12'>
        <Stats />
        <div className='flex flex-col w-full h-full items-center justify-center'>
          <AnswerButton
            type='1'
            value={question.answers[0]}
            clicked={clicked}
            setClicked={setClicked}
          />
          <AnswerButton
            type='2'
            value={question.answers[1]}
            clicked={clicked}
            setClicked={setClicked}
          />
          <AnswerButton
            type='3'
            value={question.answers[2]}
            clicked={clicked}
            setClicked={setClicked}
          />
        </div>
      </div>
    </div>
  );
};
export default Question;
