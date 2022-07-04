import { useParams } from 'react-router-dom';
const Question = () => {
  const { questionId } = useParams();
  return <div>{`Question Id: ${questionId}`}</div>;
};
export default Question;
