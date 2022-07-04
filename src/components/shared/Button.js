import { ReactComponent as ButtonBorder } from '../../assets/button.svg';
import { useNavigate } from 'react-router-dom';

const Button = ({ type, text }) => {
  const navigate = useNavigate();

  const handleNavigate = (type) => {
    if (type === 'start') navigate('/1');
    else if (type === 'final') navigate('/');
  };

  return (
    <button
      className='h-[139px] mt-[66px]'
      onClick={() => handleNavigate(type)}
    >
      <ButtonBorder className='' />
      <span className='relative text-64 bottom-[112px]'>{text}</span>
    </button>
  );
};
export default Button;
