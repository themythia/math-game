import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { StatsContext } from '../../contexts/StatsContext';

const PrivateRoute = ({ children }) => {
  const { stats } = useContext(StatsContext);
  if (stats.questions.length > 0) {
    return children;
  } else return <Navigate to='/' />;
};
export default PrivateRoute;
