import { useContext, useEffect, useState } from 'react';
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

  return (
    <div className='flex flex-row'>
      <Stickman width={width / 2 || 0} className='max-h-full' />
      <div className='flex flex-col w-1/2 p-12'>
        <Stats />
        <div className='flex flex-col w-full h-full items-center justify-center'>
          <AnswerButton
            type='1'
            value={stats.questions[questionId - 1].answers[0]}
          />
          <AnswerButton
            type='2'
            value={stats.questions[questionId - 1].answers[1]}
          />
          <AnswerButton
            type='3'
            value={stats.questions[questionId - 1].answers[2]}
          />
        </div>
      </div>
    </div>
  );
};
export default Question;
