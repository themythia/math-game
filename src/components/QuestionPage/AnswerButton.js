import { ReactComponent as ButtonBorder } from '../../assets/answerButton.svg';
const AnswerButton = ({ value, type }) => {
  const position =
    type === '1'
      ? 'right-[25%]'
      : type === '2'
      ? 'left-[25%]'
      : type === '3'
      ? 'right-[10%]'
      : null;
  return (
    <button className={`h-[178px] relative ${position}`}>
      <ButtonBorder />
      <p className='text-90 relative bottom-[75%]'>{value}</p>
    </button>
  );
};
export default AnswerButton;
