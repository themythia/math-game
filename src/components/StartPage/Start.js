import { useContext } from 'react';
import { StatsContext } from '../../contexts/StatsContext';
import Button from '../shared/Button';
import Title from '../shared/Title';
import ListItem from './ListItem';

const Start = () => {
  const { stats } = useContext(StatsContext);

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Title size='text-82' text='Mathematics Game' type='start' />
      <ul className='mt-[70px]'>
        <ListItem text='Total Score:' value={stats.total.score} />
        <ListItem text='Total Questions:' value={stats.total.questions} />
        <ListItem text='Correct Answers:' value={stats.total.answers} />
      </ul>
      <Button type='start' text='Start' />
    </div>
  );
};
export default Start;
