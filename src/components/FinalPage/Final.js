import { useContext } from 'react';
import { StatsContext } from '../../contexts/StatsContext';
import Button from '../shared/Button';
import Title from '../shared/Title';
import ListItem from '../StartPage/ListItem';
import Results from './Results';

const Final = () => {
  const { stats } = useContext(StatsContext);
  return (
    <div className='flex flex-row justify-center items-start h-screen p-4'>
      <div className='flex flex-col  items-center basis-3/5'>
        <Title size='text-82' text='Final' type='final' />
        <ul className='mt-[70px]'>
          <ListItem
            type='final'
            text='Total Score:'
            value={stats.current.score}
          />
          <ListItem
            type='final'
            text='Total Questions:'
            value={stats.current.questions}
          />
          <ListItem
            type='final'
            text='Correct Answers:'
            value={stats.current.correctAnswers}
          />
        </ul>
        <Button type='final' text='Restart' />
      </div>
      <Results />
    </div>
  );
};
export default Final;
