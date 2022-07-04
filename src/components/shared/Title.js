import { ReactComponent as Underline } from '../../assets/underline.svg';
import { ReactComponent as FinalUnderline } from '../../assets/finalUnderline.svg';
import { ReactComponent as QuestionUnderline } from '../../assets/questionUnderline.svg';

const Title = ({ size, text, type }) => {
  const components = {
    start: Underline,
    final: FinalUnderline,
    question: QuestionUnderline,
  };
  const DynamicUnderline = components[type];

  return (
    <div>
      <h1 className={`text-customRed ${size}`}>{text}</h1>
      <DynamicUnderline />
    </div>
  );
};
export default Title;
