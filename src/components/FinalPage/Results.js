import { useContext } from 'react';
import { StatsContext } from '../../contexts/StatsContext';
import { ReactComponent as Check } from '../../assets/tick.svg';
import { ReactComponent as Cross } from '../../assets/cross.svg';
import Title from '../shared/Title';

const Results = () => {
  const { stats } = useContext(StatsContext);
  return (
    <div className='basis-2/5 flex flex-col h-full '>
      <Title type='question' text='All Question' size='text-64' />
      {stats.questions.map((question, index) => (
        <div key={index} className='flex flex-row items-center w-full'>
          <p className='text-left text-52 mr-4 w-[290px]'>{`${
            question.multipliers[0]
          } x ${question.multipliers[1]} = ${
            question.multipliers[0] * question.multipliers[1]
          }`}</p>
          {question.result ? <Check /> : <Cross />}
        </div>
      ))}
    </div>
  );
};
export default Results;
