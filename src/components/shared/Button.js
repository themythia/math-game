import { ReactComponent as ButtonBorder } from '../../assets/button.svg';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { StatsContext } from '../../contexts/StatsContext';

const Button = ({ type, text }) => {
  const navigate = useNavigate();
  const { dispatch } = useContext(StatsContext);

  const handleNavigate = (type) => {
    if (type === 'start') {
      dispatch({ type: 'GENERATE_QUESTIONS' });
      navigate('/1');
    } else if (type === 'final') {
      dispatch({ type: 'RESTART' });
      navigate('/');
    }
  };

  return (
    <button
      className='h-[139px] mt-[66px]'
      onClick={() => handleNavigate(type)}
    >
      <ButtonBorder />
      <span className='relative text-64 bottom-[112px]'>{text}</span>
    </button>
  );
};
export default Button;
