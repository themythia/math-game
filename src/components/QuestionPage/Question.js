import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReactComponent as Stickman } from '../../assets/stickman.svg';
import { StatsContext } from '../../contexts/StatsContext';
import useWindowSize from '../../hooks/useWindowSize';
import Stats from '../StartPage/Stats';
import AnswerButton from './AnswerButton';
const Question = () => {
  const { questionId } = useParams();
  const { stats, dispatch } = useContext(StatsContext);
  const { width, height } = useWindowSize();
  const question = stats.questions[questionId - 1];
  const answer = question.multipliers[0] * question.multipliers[1];
  console.log('width:', width);

  const handleTextSize = (width) => {
    if (width >= 1024 && width < 1300) return 'text-90 bottom-[65%] left-[5%]';
    else if (width >= 1920) return 'text-128 bottom-[75%] left-[8%]';
    else if (width >= 1550) return 'text-128 bottom-[73%] left-[5%]';
    else if (width >= 1300) return 'text-128 bottom-[70%] left-[5%]';
  };
  useEffect(() => {
    console.log('width: in effetc', width);
    handleTextSize(width);
  }, [width]);

  return (
    <div className='flex flex-row'>
      <div className='max-h-screen overflow-hidden'>
        <Stickman width={width / 2 || 0} className='max-h-full' />
        <p
          className={`relative ${handleTextSize(width)}`}
        >{`${question.multipliers[0]} x ${question.multipliers[1]}`}</p>
      </div>
      <div className='flex flex-col w-1/2 p-12'>
        <Stats />
        <div className='flex flex-col w-full h-full items-center justify-center'>
          <AnswerButton type='1' value={question.answers[0]} />
          <AnswerButton type='2' value={question.answers[1]} />
          <AnswerButton type='3' value={question.answers[2]} />
        </div>
      </div>
    </div>
  );
};
export default Question;
