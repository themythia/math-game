import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StatsContext } from '../../contexts/StatsContext';
import useWindowSize from '../../hooks/useWindowSize';
import Stats from '../StartPage/Stats';
import AnswerButton from './AnswerButton';
import Stickman from './Stickman';

const Question = () => {
  const { questionId } = useParams();
  const { stats } = useContext(StatsContext);
  const { width } = useWindowSize();
  const question = stats.questions[questionId - 1];
  const [clicked, setClicked] = useState(false);
  useEffect(() => setClicked(false), [questionId]);

  return (
    <div className='flex flex-row w-screen h-screen'>
      <div className='h-full w-1/2 overflow-hidden flex justify-center items-center'>
        <Stickman
          width={width / 2 || 0}
          height={width / 2 || 0}
          className='max-h-full'
        />
        <p className='absolute text-90 bottom-[57%] left-[3%] sm:text-128'>{`${question.multipliers[0]} x ${question.multipliers[1]}`}</p>
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
