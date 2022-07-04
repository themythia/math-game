import { useContext } from 'react';
import { StatsContext } from '../../contexts/StatsContext';
import useWindowSize from '../../hooks/useWindowSize';

const Stats = () => {
  const { stats } = useContext(StatsContext);
  const { width } = useWindowSize();

  return (
    <div className='flex flex-row justify-between text-3xl w-full'>
      <div className='flex flex-row'>
        <p>Score:</p>
        <p>{stats.current.score}</p>
      </div>
      <div className='flex flex-row'>
        <p>Tour:</p>
        <p>{stats.current.tour}</p>
      </div>
      <div className='flex flex-row'>
        <p>Questions:</p>
        <p>{`${stats.current.correctAnswers}/${stats.current.questions}`}</p>
      </div>
    </div>
  );
};
export default Stats;
